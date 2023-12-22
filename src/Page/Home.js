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
</div>

    );
}

export default Home;