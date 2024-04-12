import React from 'react'
import Header from '../Header/Header'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <>
      <Header />
      <div className="login-box">
        <h2>Sign Up</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="" required="" />
            <label>Conform password</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>address</label>
          </div>
          <a href="#">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Sign Up
          </a>
          <Link to="/Login">
            {/* <span></span>
            <span></span>
            <span></span>
            <span></span> */}
            Login
          </Link>
        </form>
      </div>
      

    </>
  )
}

export default SignUp