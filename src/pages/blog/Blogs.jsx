import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import contactbannerimg from "../../assets/aboutsub.jpg";
import "./blog.css";
import Footer from "../../components/Footer/Footer";

const Blogs = () => {
  return (
    <div className="blogs_page">
      <Header />

      <SubPageBanner
        text={"Blogs"}
        image={contactbannerimg}
        bread="Home | Blogs"
      />
 
      <section className="blog_section_1">
        <h3>Coming soon</h3>
      </section>


      <Footer />
    </div>
  );
};

export default Blogs;
