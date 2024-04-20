import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';

const Login = () => {
  return (
    <div className="form-main">
      <div className="main-wrapper">
       <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
        <h2 className="form-head">Login Here</h2>
        <form className="form-wrapper">
          
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
              name="phone_number"
              required="required"
              placeholder="password"
            />
          </div>
            

          <p>Dont have an Account ? <Link className ="link" to="/sign-up">Sign Up</Link> </p>


          <div className="btn-wrap">
            <button> Login </button>
          </div>
        </form>
      </motion.div>
      </div>
    </div>
  )
}

export default Login