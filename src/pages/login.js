import React, { useState } from "react";
import Dashboard from "./dashboard";
import { useNavigate } from "react-router-dom";
import Routing from "./RoutingApp";


const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  const navigate = useNavigate();
  function handleClick(){
    navigate("/dashboard");
  }

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" >
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
          required
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
          required
        />
        <button type="submit" onClick={(e)=>handleClick()}>Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have an account? Register here.
      </button>
      
    </div>
  );
};

export default Login;
