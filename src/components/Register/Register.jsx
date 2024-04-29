import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div>
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
    
            <button className="button-login">Sign Up</button>
            <div className="link-signup">
            <Link to="/login" >
              allready have an account? Login
            </Link>
            </div>
          </form>
        </div>
      );
}

export default Register