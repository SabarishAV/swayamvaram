import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="background-login">
        <div className="shape-login"></div>
        <div className="shape-login"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />

        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button className="button-login">Log In</button>
        <div className="donthave">
          <Link to="/sign-up">dont have an account? sign Up</Link>
        </div>
      </form>
    </>
  );
};

export default Login;
