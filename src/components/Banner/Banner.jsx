import "./Banner.css";
import images from "../../assets/bannerside.png";
import images2 from "../../assets/bannerside2.png";
import banner from "../../assets/banner.png";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../motion";

const Banner = () => {
  const fadeInn = (direction, type, duration, delay) => {
    const variants = {
      hidden: { x: direction === "right" ? "100%" : "-100%", opacity: 0 },
      visible: {
        x: 0,
        opacity: 1,
        transition: { type, duration, delay },
      },
    };
    return variants;
  };
  return (
    <div>
      <section className="Banner section">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          // className={`innerWidth ${css.container}`}
        >
          <motion.span
            variants={fadeInn("right", "tween", 1.7, 1)}
            initial="hidden"
            animate="visible"
          >
            <img className="bannerimg" src={banner} alt="" />
          </motion.span>

          <div className="container">
            <div className="Banner_contents">
              <motion.span
                className=""
                variants={fadeIn("right", "tween", 1.7, 1)}
              >
                <h3>
                  Elevate your <br /> Love Story with <br />{" "}
                  <span style={{ color: "brown" }}>Swayamvaram.</span>
                </h3>
              </motion.span>

              <p>
                Where Destiny and Dedication Intertwine, <br />
                Guiding Souls to Perfect Matches Divine. <br />
                Embark on Your Journey to Everlasting Love.
              </p>
              <div className="banner_img">
                <img src={images} alt="" />
                <img src={images2} alt="" />
              </div>
              <div className="register_btn">
                <button>Register</button>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Banner;
