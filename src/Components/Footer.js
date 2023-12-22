import "../Styles/footer.css";
import logo from "../Assests/Logo.jpg";

function Footer(){
    return(
        <div className="footer">
            <div className="footer_logo">
            <img className="Logo_img"
            src={logo} alt=""/>
            <p className="desc">
            Your goal is our target. 
            Not anything in between. We use online 
            marketing platforms and tools to achieve single objective - your business results.
            </p>
            </div>

        </div>
    );
}
export default Footer;