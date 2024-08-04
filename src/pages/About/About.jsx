import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import aboutsubimg from "../../assets/aboutsub.jpg";
import aboutimg1 from "../../assets/aboutimg1.jpg";
import "./about.css"
import NewsLetterForm from "../../components/NewsLetter/NewsLetterForm";
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <div className="about_page">
      <Header />
      <SubPageBanner text={"About GIC"} image={aboutsubimg} />

      <section className="about_section_1">
        <p>
          GIC Consultancy, based in Nigeria, provides a wide range of management
          consulting services including company formation, secretarial services,
          business advisory, SME incubation, audit, risk management, strategic
          planning, financial system upgrades, performance management, debt
          recovery, succession planning, operations review, business planning,
          feasibility studies, financial restructuring, business process
          re-engineering, IT systems, and training.
        </p>

        <p>
          We believe selecting an accounting firm is a crucial business
          decision. Beyond auditing, we aim to be a year-round advisor and
          partner, helping clients make informed financial decisions. Our
          approach ensures high-quality service and successful outcomes for our
          clients.
        </p>
      </section>

      <section className="about_section_2">
        <div className="img_container">
            <img src={aboutimg1} alt="" />
        </div>
      </section>

      <section className="about_section_3">
        <div className="who_we_are">
            <h1>Who we are <span>and what we do</span></h1>
            <div className="line"></div>
        </div>
        <ul>
            <li>We listen to clients and assess their needs.</li>
            <li>We deliver tailored solutions.</li>
            <li>We go the extra mile to ensure our staff partners are always accessible.</li>
        </ul>
      </section>

      <NewsLetterForm />

      <Footer />
    </div>
  );
};

export default About;
