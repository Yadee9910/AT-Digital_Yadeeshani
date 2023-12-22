import "../Styles/button.css";

function Button({text, style}){
    return(
        <div className="btn">
            <button className={`nav_button ${style}`}  type="button">Get free consultation</button>
        </div>
    );
}
export default Button;