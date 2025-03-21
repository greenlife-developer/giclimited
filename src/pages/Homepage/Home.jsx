import React from "react";
import Header from "../../components/Header/Header";
import herobg from "../../assets/herobg.jpg";
import heroimg from "../../assets/hero.png";
import img1 from "../../assets/main-img1.jpg";
import business from "../../assets/bvaluation.svg";
import sticky from "../../assets/stickynote.svg";
import NewsLetterForm from "../../components/NewsLetter/NewsLetterForm";
import "./home.css";
import Footer from "../../components/Footer/Footer";
import accesslogoimg from "../../assets/companies/access_bank.jpg";
import kolologoimg from "../../assets/companies/kolo.jpg";
import rexayologoimg from "../../assets/companies/rexayo.jpg";
import rosabon from "../../assets/companies/rosabon.jpg";
import gfflogo from "../../assets/companies/gfflogo.jpg"
import union from "../../assets/companies/union.png"
import oxygen_x from "../../assets/companies/oxygen_x.png"
import gic2025 from "../../assets/gic2025.jpg"
import { Link } from "react-router-dom";

const Home = () => {
  const companyLogos = [
    accesslogoimg,
    kolologoimg,
    rexayologoimg,
    rosabon,
    gfflogo,
    union,
    oxygen_x
  ];

  return (
    <div className="homepage">
      <Header />
      <div className="hero">
        <img src={herobg} alt="hero" />

        <div className="hero-content-container">
          <div className="hero-content">
            <div className="text-actions">
              <h1>Empowering Growth, One Step at a Time</h1>
              <p>
                we specialize in guiding businesses towards exceptional
                performance and sustainable growth. Partner with us to navigate
                challenges and seize opportunities, ensuring your success in a
                competitive market.
              </p>
              <div className="actions">
                <button><Link to="/about">Explore more</Link></button>
                <button><Link to="/about">Get in touch</Link></button>
              </div>
            </div>
            <div className="img">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* <img className="newyear_greeting" src={gic2025} alt="" /> */}

      <section className="section_1">
        <div className="section_1_text">
          <h1>
            GIC <span>LIMITED</span>
          </h1>
          <div className="line"></div>
          <p>
            GIC Limited is a specialized account and Limited services firm
            in Nigeria, offering advanced strategies in supporting public and
            private clients in achieving their objectives through a variety of
            services, including company formation, secretarial services,
            business start-up advisory, and SME incubation. Our comprehensive
            offerings encompass audit, risk management, strategic planning,
            financial system design and upgrades, executive search and
            placement, performance management, debt rescheduling operations
            review, business planning, feasibility studies, finance
            restructuring, advisory services, IT systems, and financial and
            management training.
          </p>
        </div>
        <img src={img1} alt="" />
      </section>

      <section className="section_2_services">
        <div className="services_header">
          <h1>
            <span>Our</span> Services
          </h1>
          <div className="line"></div>
          <h5>Accounting Services & Solutions</h5>
          <p>
            Explore our accounting service solutions below. Additional
            information on other services can be found through the provided
            links.
          </p>
        </div>
        <div className="service_cards">
          <div className="cards">
            <div className="card">
              <img src={business} alt="" />
              <h5>Business valuation</h5>
              <p>
                Business valuation involves a series of processes and procedures
                aimed at estimating the economic value of an owner's stake in a
                company.
              </p>
            </div>
            <div className="card">
              <img src={sticky} alt="" />
              <h5>Internal Audit, Risk and Compliance Services</h5>
              <p>
                Business valuation involves a series of processes and procedures
                aimed at estimating the economic value of an owner's stake in a
                company.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section_3_companies">
        <h1>
          Our <span>clients</span>
        </h1>
        <div className="logo_scroller">
          <div className="logo_scroller_inner">
            {companyLogos.map((logo, index) => (
              <img src={logo} alt={`Company Logo ${index}`} key={index} />
            ))}
          </div>
        </div>
      </section>

      <NewsLetterForm />

      <Footer />
    </div>
  );
};

export default Home;
