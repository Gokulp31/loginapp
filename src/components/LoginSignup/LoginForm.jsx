import React, {useState} from 'react';
import "./loginForm.css";

import user_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

const LoginForm = () =>{

    const [action,setAction] = useState("Sign Up");
    return (
        <div className="container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"?<div></div>:<div className="input">
                    <img src={person_icon} alt="" />
                    <input type="text" placeholder="Username"></input>
                </div>}
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="E-mail"></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password"></input>
                </div>
            </div>
            {action==="Sign Up"?<div></div>:<div className="forget-password">forgot password <span>click here</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>sign up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        </div>
    )
}

export default LoginForm;