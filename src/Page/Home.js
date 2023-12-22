import "../Styles/home.css";
import TopNavigation from "../Components/TopNavigation";
import Button from "../Components/Button";

function Home(){
    return(
<div className="home">
     <TopNavigation />
    <div className="home_img">
            <div className="img_home"></div>
        <div className="home_text">
            <p className="home_desc">
            We crush your competitors, 
            goals, and sales records - without
            the B.S.   
            </p>
            <Button text="Get free consultation" style="btn_home" />
        </div>
    </div>
    <div className="home_contentweb">
        <div className="home_webcontent_img">
        </div>
        <div className="web_content">
            <h1 className="web_topic">Web & Mobile App Development</h1>
            <p className="content_home">
            Your web and mobile Apps are pieces of the puzzle to grow your 
            business. We use frameworks which tailor content and engagement 
            methods to respond to different intents shown by your potential 
            customers who interact with your business online.
            </p>
            <Button text="Learn more" style="btn_viewmore" />
        </div>
        
    </div>
</div>

    );
}

export default Home;