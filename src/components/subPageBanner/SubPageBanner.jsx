import "./subpagebanner.css";

const SubPageBanner = ({ text, image, bread }) => {
  return (
    <div className="subpagebanner">
      <div className="banner">
        <img src={image} alt="" />
        <div className="subpage_text">
          <h1>{text}</h1>
        </div>
      </div>
      <div className="subpage_breadcrumb">
        <h3>{bread}</h3>
      </div> 
    </div>
  );
};

export default SubPageBanner;
