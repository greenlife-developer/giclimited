import React, { useEffect, useState } from "react";
import Li from "../li/Li";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu2.svg";
import xClose from "../../assets/x-close.svg";
import "./header.css";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const headerData = [
    {
      li: "Home",
      to: "/",
    },
    {
      li: "About Us",
      items: [
        { name: "About Us", to: "/about" },
        { name: "Our core values", to: "/about/core-values" },
        // { name: "Our partners", to: "/about/partners" },
        { name: "Our management team", to: "/about/management-team" },
      ],
    },
    {
      li: "Consulting",
      items: [
        {
          name: "Operational Improvement",
          to: "/consulting/operational-improvement",
        },
        {
          name: "Business valuation services",
          to: "/consulting/business-valuation",
        },
        {
          name: "Learning and development",
          to: "/consulting/learning-development",
        },
        { name: "Executive search", to: "/consulting/executive-search" },
        { name: "Consult services", to: "/consulting/consult-services" },
        {
          name: "People performance and technology",
          to: "/consulting/people-performance",
        },
        {
          name: "Performance management systems",
          to: "/consulting/performance-management",
        },
        {
          name: "Feasibility study business plan",
          to: "/consulting/feasibility-study",
        },
        { name: "Human resources", to: "/consulting/human-resources" },
        { name: "Human capital outsourcing", to: "/consulting/human-capital" }
      ],
    },
    {
      li: "Audits",
      items: [
        {
          name: "Business regulatory services",
          to: "/audits/business-regulatory",
        },
        { name: "Risk and compliance", to: "/audits/risk-compliance" },
        {
          name: "System monitoring and control",
          to: "/audits/system-monitoring",
        },
        {
          name: "Business development service",
          to: "/audits/business-development",
        },
        { name: "Debt recovery", to: "/audits/debt-recovery" },
        {
          name: "Internal audit, risk and compliance services",
          to: "/audits/internal-audit",
        },
        {
          name: "Financial risk management",
          to: "/audits/financial-risk-management",
        },
        {
          name: "Insolvency & cooperate reengineering services",
          to: "/audits/insolvency",
        },
        { name: "Statutory records", to: "/audits/statutory-records" },
        { name: "Accountancy", to: "/audits/accountancy" },
        {
          name: "Internal debt recovery agents",
          to: "/audits/internal-debt-recovery",
        },
        { name: "Statutory records", to: "/audits/statutory-records" },
      ],
    },
    {
      li: "Strategy",
      items: [
        {
          name: "Management consultancy services",
          to: "/strategy/management-consultancy",
        },
        { name: "Marketing research", to: "/strategy/marketing-research" },
        {
          name: "Strategic planning services",
          to: "/strategy/strategic-planning",
        },
        {
          name: "Business transformation improvement",
          to: "/strategy/business-transformation",
        },
        {
          name: "Wealth management services",
          to: "/strategy/wealth-management",
        },
        {
          name: "Internal audit, risk and compliance services",
          to: "/strategy/internal-audit",
        },
        {
          name: "Change management services",
          to: "/strategy/change-management",
        },
        {
          name: "Business registration",
          to: "/strategy/business-registration",
        },
        {
          name: "Secretarial services in Nigeria",
          to: "/strategy/secretarial-services",
        },
      ],
    },
    {
      li: "Advisory",
      items: [
        { name: "Company searches", to: "/advisory/company-searches" },
        { name: "Corporate finance", to: "/advisory/corporate-finance" },
        {
          name: "Company formation services",
          to: "/advisory/company-formation",
        },
        { name: "SME advisory services", to: "/advisory/sme-advisory" },
        { name: "Project management", to: "/advisory/project-management" },
        { name: "Bad debt recovery agent", to: "/advisory/bad-debt-recovery" },
        { name: "Pension advisory services", to: "/advisory/pension-advisory" },
        { name: "Organisational audit", to: "/advisory/organisational-audit" },
        { name: "Other marketing offering", to: "/advisory/other-marketing" },
      ],
    },
    {
      li: "Jobs",
      to: "/jobs",
    },
    {
      li: "Blog",
      to: "/blogs",
    },
    {
      li: "Contact us",
      to: "/contact-us",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".item")) {
        setOpenItemIndex(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleItemClick = (index) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const handleCloseNav = () => {
    setShowNav(!showNav)
  }

  return (
    <div className="header">
      <nav className="nav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={showNav ? "nav-items show_nav" : "nav-items"}>
          <ul>
            {headerData.map((data, i) => (
              <Li
                li={data.li}
                items={data.items ? data.items : null}
                to={data.to}
                key={i}
                isOpen={openItemIndex === i}
                onClick={() => handleItemClick(i)}
                closeNav={handleCloseNav}
              />
            ))}
            <div onClick={handleCloseNav} className="close_icon">
              <img src={xClose} alt="close" />
            </div>
          </ul>
        </div>
        <div onClick={() => setShowNav(!showNav)} className="menu_icon">
          <img src={menu} alt="" />
        </div>
      </nav>
    </div>
  );
};

export default Header;
