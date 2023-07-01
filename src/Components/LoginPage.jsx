import React from "react";
import Login from "./Login";
import Register from "./Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXing,faFacebook,faTwitter,faYoutube,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
function Home(){
    const [currentForm,setCurrentForm] = React.useState("login");
    const toggleForm = (formName)=>{
        setCurrentForm(formName);
    }
    return (
        <div className="container">
            <div className="item">
                <h1 className="logo"><FontAwesomeIcon icon={faXing} />Udymi</h1>
                <div className="text-item">
                    <h2>Connect <br/><span>
                        With us
                    </span></h2>
                    <p>share your ideas and grow with the program</p>
                    <div className="social-icon">
                        <a href="/"><FontAwesomeIcon icon={faFacebook} className="soc-ico"/></a>
                        <a href="/"><FontAwesomeIcon icon={faTwitter} className="soc-ico"/></a>
                        <a href="/"><FontAwesomeIcon icon={faYoutube} className="soc-ico"/></a>
                        <a href="/"><FontAwesomeIcon icon={faInstagram} className="soc-ico"/></a>
                        <a href="/"><FontAwesomeIcon icon={faLinkedinIn} className="soc-ico"/></a>
                    </div>
                </div>
            </div>
            <div className="login-section">
                {currentForm==="login"?<Login onFormSwitch={toggleForm}/>:<Register onFormSwitch = {toggleForm}/>}
            </div>
        </div>
    )
}
export default Home;