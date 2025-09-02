import "./newsletter.css";

const NewsLetterForm = () => {
  return (
    <div id="newsletter" className="newsletter">
      <div className="newsletter-content">
        <h3>Subscribe to our Newsletter</h3>
        <p>Receive our insight to help you achieve more</p>

        <div className="newsletter_form">
          <form action="">
            <div className="form_field">
              <label htmlFor=""></label>
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form_field">
              <label htmlFor=""></label>
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form_field">
              <label htmlFor="">4+6=?</label>
              <input className="calc" type="text"/>
            </div>
            <button type="submit">Subscribe Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterForm;
