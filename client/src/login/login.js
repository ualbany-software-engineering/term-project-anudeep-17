import React, { useEffect, useState } from 'react'
import "./login.css";
// import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Axios from "axios";
import {useNavigate} from "react-router-dom"

export const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const navigate = useNavigate();
    const [activeclass, setActiveclass] = useState(false);
    const [status, setStatus] = useState("");
    let navigate = useNavigate();

const onclicker =() =>{
      alert("login successful");
      navigate("/add");
}
const onregister =() =>{
    alert("registration successful");
    navigate("/add");
}

  return (
    <div className='loginsection'>
    <div className='loginbody'>   
        <div className= {activeclass ? "login" : "login signup"} id= "login">
            <div className='formbody signupdata'>
                <form action='#'>
                    <h3>Dont Fall Behind !</h3>                   
                    {/* <input type="text" placeholder='Name' />
                    <input type={"email"} placeholder='E-mail' onChange={(e) => setEmail(e.target.value)}/>
                    <input type={"password"} placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
                    <button class = "primary-btn" onClick={signUp}>
                        Create Account
                    </button> */}
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick = {onregister}>Create Account</button>
                </form>
                </form>
            </div>

            <div className='formbody signindata'>
                <form action='#'>
                    <h3>Welcome back</h3>
                    <span>Sign In</span>
                    <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={onclicker}>Login</button>
                </form>
                </form>
            </div>



            <div className='overlayer'>
                <div className = "overlay">
                    <div className='overdiv overlay-left'>
                        <h1>Home Coming ? 🎉</h1>
                        <p>
                        Are you returning student ?
                        </p>
                        <button className= "displayer" id = "signin" onClick={() => setActiveclass(true)}>LOGIN</button>
                    </div>

                    <div className='overdiv overlay-right'>
                        <h1>Far from Home...✌</h1>
                        <p>
                           Want to register with us?
                        </p>
                        <button className= "displayer" id = "signUp" onClick={() => setActiveclass(false)}>CREATE ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}
