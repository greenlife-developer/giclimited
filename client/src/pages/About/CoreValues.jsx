import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import corevalueimg from "../../assets/corevalueimg.jpg";
import "./core.css";
import NewsLetterForm from "../../components/NewsLetter/NewsLetterForm";
import Footer from "../../components/Footer/Footer";

const CoreValues = () => {
  return (
    <div className="core_values_page">
      <Header />
      <SubPageBanner
        text={"Our Core Values"}
        image={corevalueimg}
        bread="About | Core values"
      />

      <section className="core_value_section_1">
        <div className="">
          <h1>Our Vision</h1>
          <p>
            We adapt to our clients' changing needs by continuously seeking
            innovative ways to serve them and attracting new talent.We value
            diverse perspectives to achieve lasting success for our firm,
            clients, and team.
          </p>
        </div>
        <div className="">
          <h1>Our Mission</h1>
          <p>
            We continually adapt to meet our clients' evolving needs by bringing
            in new talent and innovative solutions. We value diverse
            perspectives to achieve lasting success for our firm, clients, and
            team.
          </p>
        </div>
      </section>

      <section className="core_value_section_2">
        <div className="">
          <div className="line"></div>
          <h1>
            Core <span>Values</span>
          </h1>
        </div>
      </section> 

      <section className="core_value_section_3">
        <div className="">
          <h3>Outstanding Client Support</h3>
          <p>
            In thriving companies, shifting directions or initiating new
            projects involves blending existing strengths and capabilities with
            fresh energy and support.
          </p>
        </div>
        <div className="">
          <h3>An Excellent Team and a Winning Culture</h3>
          <p>
            In successful companies, changing directions or starting new
            projects involves merging existing strengths and capabilities with
            fresh energy and support.
          </p>
        </div>
        <div className="">
          <h3>Dedication to Integrity and Fairness</h3>
          <p>
            In robust companies, altering course or starting new projects
            involves integrating existing strengths and capabilities with fresh
            energy and support.
          </p>
        </div>
      </section>

      <NewsLetterForm />

      <Footer />
    </div>
  );
};

export default CoreValues;
