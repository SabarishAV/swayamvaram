import './Hero.css';
import { fadeIn, staggerContainer } from "../../utils/motion";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import RegisterComponent from '../RegisterComponent';

const Hero = () => {
  return (


    <div className="main-hero">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      // className={`innerWidth ${css.container}`}
      >
        <div className="container">
          <div className="Parent_section">
            <div className="hero-left">
              <div className="left-heading elevate">
                <motion.span className="" variants={fadeIn("right", "tween", 0.7, 1)}>
                  <h1 className="elevate">
                    Elevate your <br /> Love Story with <br />
                    <span className="swayamvaram-heading elevate">Swayamvaram.</span>
                  </h1>
                </motion.span>

              </div>
              <div className="left-paragraph">
                <p className="sub__text">
                  Embrace the journey of love. <br />
                  Where hearts meet and destinies intertwine. <br />
                  Welcome to a world of endless possibilities."{" "}
                </p>
              </div>

              <div className="left-circle-images-main">
                <img src="./ellipse-71@2x.png" className="circle-one" alt="" />
                <img src="./ellipse-72@2x.png" className="circle-two" alt="" />
                <img src="./ellipse-73@2x.png" className="circle-three" alt="" />
                <img src="./ellipse-74@2x.png" className="circle-four" alt="" />
                <img src="./ellipse-75@2x.png" className="circle-five" alt="" />
                <div className="star-main">
                  <div className="star-one">
                    <FaStar className="star-icon" />
                  </div>
                  <div className="star-one">
                    <FaStar className="star-icon" />
                  </div>
                  <div className="star-one">
                    <FaStar className="star-icon" />
                  </div>
                  <div className="star-one">
                    <FaStar className="star-icon" />
                  </div>
                  <div className="star-one">
                    <FaStar className="star-icon" />
                  </div>
                  <p className="rating-content">4.5/5</p>
                </div>
              </div>
              <RegisterComponent />
            </div>
            <div className="hero-right">
              <img
                src="./group-1000008637@2x.png"
                className="heart-left"
                alt=""
              />
              <img
                src="./group-1000008641@2x.png"
                className="heart-right"
                alt=""
              />
              <div className="hero-background">
                <img
                  src="./bannerng.png"
                  className="hero-background-image"
                  alt=""
                />
              </div>
              <div className="hero-img">
                <img src="./hero-image1.png" className="hero-image" alt="" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Hero;
