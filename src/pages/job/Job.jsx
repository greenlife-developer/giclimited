import React, { useState } from "react";
import axios from "axios"; // Import axios
import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import jobbannerimg from "../../assets/jobbannerimg.jpg";
import img1 from "../../assets/jobsectionimg.jpg";
import "./job.css";
import Footer from "../../components/Footer/Footer";

const Job = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [waitForUpload, setWaitForUpload] = useState(false); 
  const [cvFile, setCvFile] = useState(null); // State to hold the file

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]); // Store the selected file
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV.");
      return;
    }

    let cvUrl;

    // Upload CV to Cloudinary
    try {
      setWaitForUpload(true); // Show loading spinner
      const formData = new FormData();
      formData.append("file", cvFile);
      formData.append("cloud_name", "dfrwntkjm");
      formData.append("upload_preset", "hqq7lql7");

      let cloudinaryUrl = "";

      // Check the file type and set the appropriate Cloudinary API endpoint
      if (
        cvFile.type === "image/jpeg" ||
        cvFile.type === "image/jpg" ||
        cvFile.type === "image/png"
      ) {
        cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfrwntkjm/image/upload";
      } else if (cvFile.type === "application/pdf") {
        cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfrwntkjm/raw/upload"; // Cloudinary endpoint for PDF files
      } else {
        alert("Please upload a valid file (JPEG, PNG, or PDF).");
        return;
      }

      const response = await fetch(cloudinaryUrl, { method: "post", body: formData });
      const fileData = await response.json();
      cvUrl = fileData.secure_url; // Get the uploaded file URL
    } catch (error) {
      console.error("Error uploading CV:", error);
      alert("Failed to upload CV.");
      return;
    }

    // Prepare the data for email
    const data = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      qualification: e.target.qualification.value,
      cv: cvUrl, // Include the CV URL
    };

    try {
      setWaitForUpload(true); // Show loading spinner
      const response = await fetch("https://gicbackend.onrender.com/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
        setWaitForUpload(false); // Hide loading spinner
        closePopup();
      } else {
        alert("Failed to submit application.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting your application.");
    }
  };

  return (
    <div className="job_page">
      <Header />
      <SubPageBanner text={"Jobs"} image={jobbannerimg} bread="Home | Jobs" />

      <section className="job_advert">
        <h1>We Are Hiring!</h1>
        <div className="advert_details">
          <h2>Position: Credit and Collection Officer</h2>
          <h3>Requirements & Benefits:</h3>
          <ul>
            <li>SSCE/ND/HND/Bsc.</li>
            <li>
              0 to 2 years experience with Microfinance institutions, Credit
              company, MFB
            </li>
            <li>Must have a good smartphone</li>
            <li>Excellent knowledge of using mobile phone</li>
            <li>Ability to work 80% on the field with target</li>
            <li>
              Drive onboarding of new clients through direct and prospection
            </li>
            <li>
              Cross-sell the company products (Loans, savings, investment etc)
            </li>
            <li>
              Carry out credit assessment and detail KYC on every customer
            </li>
            <li>
              Manage Loan portfolio by ensuring timely collection of the
              outstanding loan.
            </li>
            <li>
              Manage the relationship between the customer and the company
            </li>
            <li>Ensure customer satisfaction experience</li>
            <li>Applicant MUST be within Ibadan</li>
            <li>
              They will work within 1. Iwo road Ibadan 2. Aliiwo Gate Ibadan.
            </li>
          </ul>
          <h3>Salary 40k - 70k</h3>
          <h3>Closing Date: October 28, 2024</h3>
          <button onClick={openPopup}>Apply Now</button>
        </div>
      </section>

      {isPopupOpen && (
        <div className="popup">
          {waitForUpload && (<div className="loading_spinner"><h4>Please wait</h4></div>)}
          <div className="popup_content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <h1>Quick Application</h1>
            <form onSubmit={submitForm}>
              <div className="form_field">
                <label>Your Name (required)</label>
                <input type="text" name="name" required />
              </div>
              <div className="form_field">
                <label>Address (required)</label>
                <input type="text" name="address" required />
              </div>
              <div className="form_field">
                <label>Phone Number (required)</label>
                <input type="text" name="phone" required />
              </div>
              <div className="form_field">
                <label>Your Email (required)</label>
                <input type="email" name="email" required />
              </div>
              <div className="form_field">
                <label>Qualification (required)</label>
                <select name="qualification" required>
                  <option value="">Choose</option>
                  <option value="ssce">SSCE</option>
                  <option value="nd">ND</option>
                  <option value="hnd">HND</option>
                  <option value="bsc">Bsc.</option>
                </select>
              </div>
              <div className="form_field">
                <label>Upload CV (required)</label>
                <input type="file" onChange={handleFileChange} required />
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}

      <section className="job_section_1">
        <div className="item_text">
          <h1>Jobs</h1>
          <div className="line"></div>
          <p>
            Fill out the form below to submit your Curriculum Vitae. Fields
            marked as "required" are mandatory. Incomplete or duplicate
            applications will be disqualified. Important notice: After
            completing this form, please upload your CV in either Microsoft Word
            or PDF format.
          </p>
        </div>
        <div className="item_image">
          <img src={img1} alt="" />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Job;
