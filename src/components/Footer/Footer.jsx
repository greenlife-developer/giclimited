import logo from "../../assets/logo.svg";
import fb from "../../assets/fb.svg";
import ig from "../../assets/ig.svg";
import linkedin from "../../assets/linkedin.svg";
import x from "../../assets/x.svg";
import callicon from "../../assets/callicon.svg";
import mailicon from "../../assets/mailicon.svg";
import locationicon from "../../assets/locationicon.svg";
import "./footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <footer>
                <div className="footer_items">
                    <div className="footer_item">
                        <img className="logo" src={logo} alt="logo" />
                        <div className="social">
                            <img src={fb} alt="" />
                            <img src={x} alt="" />
                            <img src={linkedin} alt="" />
                            <img src={ig} alt="" />
                        </div>
                    </div>
                    <div className="footer_item">
                        <h3>Services</h3>
                        <ul>
                            <li>Consulting services</li>
                            <li>Audit Services in Nigeria</li>
                            <li>Strategy</li>
                            <li>Advisory services</li>
                        </ul>
                    </div>
                    <div className="footer_item">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><img src={callicon} alt="" /> <span>+234 706 968 4132</span></li>
                            <li><img src={mailicon} alt="" /> <span>info@giclimited.com</span></li>
                            <li><img src={locationicon} alt="" /> <span>No. 1 Ramfol building ori field behind Olowotinfowosanu Complex Iwo Road Ibadan</span></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}



export default Footer