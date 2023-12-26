import React, {useState, useEffect} from 'react';
import "./loginForm.css";
// import FetchData from './fetchData'

import user_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'
import person_icon from '../Assets/person.png'

// import React, {useEffect} from 'react';
import axios from 'axios'


const LoginForm = () =>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [c_password,setC_password] = useState('');
    const handleLogin = async (e) => {
        // e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/login', {
            email,
            password,
          });
          alert("Login Successful");
    
        //   // Assuming your API returns a token
        //   const token = response.data.access_token;
        //   console.log(token)
    
        //   // Store the token securely (e.g., in local storage or a cookie)
        //   localStorage.setItem('token', token);
    
        //   // Redirect or perform additional actions after successful login
        } catch (error) {
          // Handle login errors
        //   console.log("Thappu panitiye singaram");
        }
    }
    const handleRegister = async (e) => {
        // e.preventDefault();
    
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/register', {
            name,
            email,
            password,
            c_password,
          });
          alert("Registration Successful");
    
        //   // Assuming your API returns a token
        //   const token = response.data.access_token;
        //   console.log(token)
    
        //   // Store the token securely (e.g., in local storage or a cookie)
        //   localStorage.setItem('token', token);
    
        //   // Redirect or perform additional actions after successful login
        } catch (error) {
            //Handle login errors
            console.log("Thappu panitiye singaram");
        }
    }

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
                    <input type="text" placeholder="Username" onChange={(e)=>setName(e.target.value)}></input>
                </div>}
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                {action ==="Sign Up"?<div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Confirm Password" onChange={(e) => setC_password(e.target.value)}></input>
                </div>:<div></div>}
                
            </div>
            {action==="Sign Up"?<div></div>:<div className="forget-password">forgot password <span>click here</span></div>}
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{handleRegister(); setAction("Sign Up")}}>sign up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={() => {handleLogin(); setAction("Login");}}>Login</div>
                {/* <button type="submit" onClick={()=>handleLogin()}>Login</button> */}
            </div>
        </div>
    )
}

export default LoginForm;
