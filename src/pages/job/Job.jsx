import React, { useState } from "react";
import axios from "axios"; // Import axios
import Header from "../../components/Header/Header";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import jobbannerimg from "../../assets/jobbannerimg.jpg";
import img1 from "../../assets/jobsectionimg.jpg";
import "./job.css";
import Footer from "../../components/Footer/Footer";

const jobAdverts = [
  {
    position: "Digital Recovery Officer",
    requirements: [
      "Candidates should possess an ND,NCE,HND or BSc.",
      "Age should be between 25 - 35 years.",
      "Manage and recover outstanding debts from customers",
      "Develop and implement effective debt recovery strategies",
      "Identify and report on potential fraud or credit risks",
      "Collaborate with internal teams to resolve customer disputes",
      "Communicate with customers to negotiate payment plans and settlements",
      "Maintain accurate records of debt recovery activities",
      "Meet or exceed monthly debt recovery targets",
      "Provide excellent customer service and maintain a professional image",
    ],
    responsibilities: [
      "Experience : Not required",
      "Very Strong communication and negotiation skills highly needed",
      "Ability to work in a fast-paced environment",
      "Excellent problem-solving and analytical skills",
      "Strong attention to detail and organizational skills",
      "Proficiency in MS Office and debt recovery software",
    ],
    salary: "#40,000, Performance based bonus of up to ₦300,000",
    closingDate: "Open",
  },
];

const Job = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [waitForUpload, setWaitForUpload] = useState(false);
  const [cvFile, setCvFile] = useState(null);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleFileChange = (e) => {
    setCvFile(e.target.files[0]);
  };

  const uploadCV = async () => {
    const formData = new FormData();
    formData.append("file", cvFile);
    formData.append("cloud_name", "dfrwntkjm");
    formData.append("upload_preset", "hqq7lql7");

    let cloudinaryUrl = "";

    if (
      cvFile.type === "image/jpeg" ||
      cvFile.type === "image/jpg" ||
      cvFile.type === "image/png"
    ) {
      cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfrwntkjm/image/upload";
    } else if (cvFile.type === "application/pdf") {
      cloudinaryUrl = "https://api.cloudinary.com/v1_1/dfrwntkjm/raw/upload";
    } else {
      // alert("Please upload a valid file (JPEG, PNG, or PDF).\");
      throw new Error("Invalid file type");
    }

    const response = await fetch(cloudinaryUrl, {
      method: "post",
      body: formData,
    });
    const fileData = await response.json();
    return fileData.secure_url;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!cvFile) {
      alert("Please upload your CV.");
      return;
    }

    let cvUrl;

    try {
      setWaitForUpload(true);
      cvUrl = await uploadCV();
    } catch (error) {
      setWaitForUpload(false);
      console.error("Error uploading CV:", error);
      alert("Failed to upload CV.");
      return;
    }

    const data = {
      name: e.target.name.value,
      address: e.target.address.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      qualification: e.target.qualification.value,
      position: e.target.position.value,
      cv: cvUrl,
    };

    try {
      setWaitForUpload(true);
      const response = await fetch(
        "https://gicbackend.onrender.com/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        alert("Application submitted successfully!");
        closePopup();
      } else {
        const errorResponse = await response.json();
        console.error("Server error response:", errorResponse);
        alert(
          `Failed to submit application: ${
            errorResponse.message || "Unknown error"
          }`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      if (
        error.name === "TypeError" &&
        error.message.includes("NetworkError")
      ) {
        alert("Network error: Please check your connection and try again.");
      } else {
        alert(
          "An unexpected error occurred while submitting your application."
        );
      }
    } finally {
      setWaitForUpload(false);
    }
  };

  return (
    <div className="job_page">
      <Header />
      <SubPageBanner text={"Jobs"} image={jobbannerimg} bread="Home | Jobs" />

      {jobAdverts.map((job, index) => (
        <section className="job_advert" key={index}>
          <h1>We Are Hiring!</h1>
          <div className="advert_details">
            <h2>Position: {job.position}</h2>
            <h3>Requirements & Benefits:</h3>
            <ul>
              {job.requirements.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <h3>responsibilities:</h3>
            <ul>
              {job.responsibilities?.map((req, idx) => (
                <li key={idx}>{req}</li>
              ))}
            </ul>
            <h3>Salary: {job.salary}</h3>
            <h3>Closing Date: {job.closingDate}</h3>
            <button onClick={openPopup}>Apply Now</button>
          </div>
        </section>
      ))}

      {isPopupOpen && (
        <div className="popup">
          {waitForUpload && (
            <div className="loading_spinner">
              <h4>Please wait</h4>
            </div>
          )}
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
                <label>Position</label>
                <select name="position" required>
                  {jobAdverts.map((job, index) => (
                    <option value={job.position}>{job.position}</option>
                  ))}
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
