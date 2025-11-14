import json
import sys
import scrapy
import chompjs
from scrapy.crawler import CrawlerProcess
from scrapy.http import Request

class TrendyolSpider(scrapy.Spider):
    name = 'trendyol_spider'

    def __init__(self, product_url=None, **kwargs):
        super().__init__(**kwargs)
        self.start_urls = [product_url] if product_url else []

    def parse(self, response):
        # Extract JSON-LD (structured data)
        json_ld = response.xpath("//p/script[contains(@type,'application/ld+json')]/text()").get()
        data_ld = json.loads(json_ld) if json_ld else {}
        image = data_ld.get('image')

        product = response.css('div.pd-app-container')
        category = product.css('div.breadcrumb>a:nth-child(3)+ a.breadcrumb-item span::text').get()
        title = product.css('h1.pr-new-br::text').get() or ""
        brand = response.css("div.sl-nm a::text").get()
        price = product.css('div.pr-bx-nm span.prc-org::text').get()
        discount_price = product.css('div.pr-bx-nm span.prc-slg::text').get()
        price = price.replace("TL", "").strip() if price else None
        discount_price = discount_price.replace("TL", "").strip() if discount_price else None

        # Extract internal Trendyol API reference
        all_info = response.xpath("//script[contains(@type,'application/javascript')]/text()").get()
        try:
            product_json = chompjs.parse_js_object(all_info)
            product_id = product_json['product']['productGroupId']
            variant_url = f"https://public.trendyol.com/discovery-web-productgw-service/api/productGroup/{product_id}"
            yield Request(
                url=variant_url,
                callback=self.parse_variants,
                meta={
                    'category': category,
                    'product_name': title,
                    'price': price,
                    'discount_price': discount_price,
                    'brand': brand,
                    'image': image
                }
            )
        except Exception as e:
            # If parsing fails, still return what we have
            yield {
                'category': category,
                'product_name': title,
                'price': price,
                'discount_price': discount_price,
                'brand': brand,
                'image': image,
                'error': str(e)
            }

    def parse_variants(self, response):
        try:
            data = json.loads(response.text)
            attributes = data.get('result', {}).get('slicingAttributes', [])
            renk = attributes[0]['attributes'] if attributes else []
        except Exception:
            renk = []

        yield {
            'category': response.meta.get('category'),
            'product_name': response.meta.get('product_name'),
            'price': response.meta.get('price'),
            'discount_price': response.meta.get('discount_price'),
            'brand': response.meta.get('brand'),
            'image': response.meta.get('image'),
            'variants': renk
        }

if __name__ == "__main__":
    # Get product URL from Node.js arguments
    if len(sys.argv) < 2:
        print(json.dumps({'error': 'Missing product URL'}))
        sys.exit(1)

    product_url = sys.argv[1]

    process = CrawlerProcess(settings={
        "LOG_LEVEL": "ERROR",
        "FEEDS": {
            "stdout:": {"format": "json"},
        },
    })
    process.crawl(TrendyolSpider, product_url=product_url)
    process.start()
