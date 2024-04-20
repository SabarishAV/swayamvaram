import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contactprev.css';
import { motion } from 'framer-motion';
import { headerVariants } from '../../utils/motion';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('', '', form.current, '').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <div className="form-main">
      <div className="main-wrapper">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
        <h2 className="form-head">Contact Form</h2>
        <form className="form-wrapper" ref={form} onSubmit={sendEmail}>
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="full_name"
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
              type="number"
              name="phone_number"
              required="required"
              placeholder="phone number"
            />
          </div>
          <div className="form-card">
            <input
              className="form-input"
              type="text"
              name="message"
              required="required"
              placeholder="address"
            />
          </div>

          <div className="btn-wrap">
            <button> Submit </button>
          </div>
        </form>
      </motion.div>
      </div>
    </div>
  );
};
