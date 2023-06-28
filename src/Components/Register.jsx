import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'
function Register(props){
    return (
        <div className="form-box register">
                <form action="">

                    <h2>Sign Up</h2>

                    <div className="input-box">
                        <span className="icon"><FontAwesomeIcon icon={faUser}/></span>
                        <input type="text" required/>
                        <label >Username</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope}/></span>
                        <input type="email" required/>
                        <label >Email</label>
                    </div>
                    <div className="input-box">
                        <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-password">
                        <label for=""><input type="checkbox"/>I agree with this statment</label>
                    </div>
                    <button className="btn">Login In</button>
                    <div className="create-account">
                        <p>Already Have An Account? <button onClick={()=>props.onFormSwitch('login')}>Sign In</button></p>
                    </div>
                </form>
            </div>
    )
}
export default Register;