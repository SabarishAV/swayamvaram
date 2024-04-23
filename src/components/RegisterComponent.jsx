import { Link } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <div className="register">
      <Link to="/sign-up">
        <button className="register-button">Register</button>
      </Link>
    </div>
  );
};

export default RegisterComponent;
