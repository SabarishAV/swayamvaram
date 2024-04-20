import { Link } from 'react-router-dom';
import './Register.css';
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';

const Register = () => {
  return (
    <div className="form-main">
      <div className="main-wrapper">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h2 className="form-head">Sign Up</h2>
          <form className="form-wrapper">
            <div className="form-card">
              <input
                className="form-input"
                type="name"
                name="name"
                required="required"
                placeholder="name"
              />
            </div>
            <div className="form-card">
              <input
                className="form-input"
                type="email"
                name="email"
                required="required"
                placeholder="email"
              />
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="password"
                name="password"
                required="required"
                placeholder="password"
              />
            </div>

            <div className="form-card">
              <input
                className="form-input"
                type="password"
                name="conform password"
                required="required"
                placeholder="conform password"
              />
            </div>

            <p className="acc">
              Allready have an Account ?{' '}
              <Link className="link" to="/login">
                Login
              </Link>
            </p>

            <div className="btn-wrap">
              <button>Sign Up</button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Register;
