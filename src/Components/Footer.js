import "../Styles/footer.css";
import logo from "../Assests/Logo.jpg";

function Footer(){
    return(
        <div className="footer">
           <div className="footer_container">
                <div className="footer_logo">
                    <img className="Logo_img"
                    src={logo} alt=""/>
                    <p className="desc">
                    Your goal is our target. 
                    Not anything in between. We use online 
                    marketing platforms and tools to achieve single objective - your business results.
                    </p>
                </div>

                <div className="footer_desc">
                    <div className="footer_tech">
                        <h1 className="technology">Our Technologies</h1>
                        <ul className="listitems">
                            <li className="list">ReactJS</li>
                            <li className="list">Gatsby</li>
                            <li className="list">NextJS</li>
                            <li className="list">NodeJS</li>
                            <li className="list">GraphQL</li>
                            <li className="list">Laravel</li>
                        </ul>
                    </div>

                    <div className="footer_service">
                        <h1 className= "Services">Our Services</h1>
                        <ul className="listitems">
                            <li className="list">Social media Marketing</li>
                            <li className="list">Web & Mobile App Development</li>
                            <li className="list">Data & Analytics</li>
                            <li className="list">Google Marketing solutions</li>
                            <li className="list">Search Engine Optimization</li>
                        </ul>
                    </div>
                </div>

                

           </div>
           <div className="footer_under">
                    <hr className="foot_horizonline"></hr>
                    <div className="foot_conditions">
                        <p>Privacy Policy</p>
                        <hr className="foot_verticaline"></hr>
                        <p>Terms & Conditions</p>
                    </div>
                    
                </div>
        </div>
        
    );
}
export default Footer;