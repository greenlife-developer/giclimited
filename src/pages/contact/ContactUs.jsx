import contactbannerimg from "../../assets/contactbannerimg.jpg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import LeaveAMessage from "../../components/messages/LeaveAMessage";
import SubPageBanner from "../../components/subPageBanner/SubPageBanner";
import "./contactus.css";

const ContactUs = () => {
  return (
    <div className="contact_us_page">
      <Header />
      <SubPageBanner
        text={"Contact Us"}
        image={contactbannerimg}
        bread="Home | Contact us"
      />

      <section className="contact_us_section_1">
        <h1>Office location</h1>
        <div className="line"></div>

        <div className="contact_info_container">
          <div className="text_info">
            <div className="info_item">
              <h3>Address</h3>
              <p>No. 1 Ramfol building ori field behind Olowotinfowosanu Complex Iwo Road Ibadan</p>
            </div>
            <div className="info_item">
              <h3>Email</h3>
              <p>info@giclimited.com</p>
            </div>
            <div className="info_item">
              <h3>Phone</h3>
              <p>+234 706 968 4132</p>
            </div>
            <div className="info_item">
              <h3>Office timing</h3>
              <p>Monday - Fridays: 8am - 5pm</p>
            </div>
          </div>
          <div className="map_info">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15826.218833624898!2d3.9291142478058028!3d7.403685560621816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sNo.%201%20Ramfol%20building%20ori%20field%20behind%20Olowotinfowosanu%20Complex%20Iwo%20Road%20Ibadan!5e0!3m2!1sen!2sng!4v1722971486873!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      <LeaveAMessage />

      <Footer />
    </div>
  );
};

export default ContactUs;
