import React from "react";
import "./Login.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Header />
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login
          </a>
          <Link to="/SignUp">
            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}
            register 
          </Link>
        </form>
      </div>
      

    </>
  );
};

export default Login;
