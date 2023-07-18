import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'
function Login(props){
    return (
        <div className="form-box login">
                <form action="">
                    <h2>Sign In</h2>
                    <div className="input-box">
                        <span className="icon"><FontAwesomeIcon icon={faEnvelope} /></span>
                        <div class="form-floating">
                            <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" fdprocessedid="mdpbhm"/>
                            <label for="floatingInput">Email address</label>
                        </div>
                    </div>
                    <div className="input-box">
                        <span className="icon"><FontAwesomeIcon icon={faLock}/></span>
                        <input type="password" required/>
                        <label>Password</label>
                    </div>
                    <div className="remember-password">
                        <label for=""><input type="checkbox"/>Remember Me</label>
                        <a href="#">Forget Password</a>
                    </div>
                    <button className="log-btn">Login In</button>
                    <div className="create-account">
                        <p>Create A New Account? <button onClick={()=>props.onFormSwitch('register')}>Sign Up</button></p>
                    </div>
                </form>
        </div>
    )
}
export default Login;