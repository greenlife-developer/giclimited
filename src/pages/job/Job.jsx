import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import jobbannerimg from "../../assets/jobbannerimg.jpg";
import img1 from "../../assets/jobsectionimg.jpg";
import "./job.css";
import Footer from "../../components/Footer/Footer";

const Job = () => {
  return (
    <div className="job_page">
      <Header />
      <SubPageBanner text={"Jobs"} image={jobbannerimg} bread="Home | Jobs" />

      <section className="job_section_1">
        <div className="item_text">
          <h1>Jobs</h1>
          <div className="line"></div>
          <p>
            Fill out the form below to submit your Curriculum Vitae. Fields
            marked as "required"are mandatory. Incomplete or duplicate
            applications will be disqualified. Important notice: After
            completing this form, please upload your CV in either Microsoft Word
            or PDF format.
          </p>
        </div>
        <div className="item_image">
          <img src={img1} alt="" />
        </div>
      </section>

      <section className="job_section_2">
        <div className="application_form">
          <h1>Quick Application</h1>
          <form action="">
            <div className="form_field">
              <label htmlFor="">Your Name (required)</label>
              <input type="text" />
            </div>
            <div className="form_field">
              <label htmlFor="">Address (required)</label>
              <input type="text" />
            </div>
            <div className="form_field">
              <label htmlFor="">Phone Number (required)</label>
              <input type="text" />
            </div>
            <div className="form_field">
              <label htmlFor="">Your Email (required)</label>
              <input type="email" />
            </div>
            <div className="form_field">
              <label htmlFor="">Qualification (required)</label>
              <select name="" id="">
                <option value="">Choose</option>
                <option value="bsc">BSc</option>
                <option value="msc">MSc</option>
              </select>
            </div>
            <div className="form_field">
              <label htmlFor="">Upload CV (required)</label>
              <input type="file" name="" id="" />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Job;
