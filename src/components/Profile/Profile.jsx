import React from "react";
import Header from "../Header/Header";
import { FaStar } from "react-icons/fa";
import "./Profile.css";
import Footer from "../Footer/Footer";
import FindProfileComponent from "../FindProfileComponent";
import ProfileRight from "../ProfileRight";

const Profile = () => {
  return (
    <>
      <Header />
      <div className="main-hero">
        <div className="container">
          <div className="Parent_section">
            <div className="hero-left">
              <div className="left-heading">
                <h1>
                  Elivate your <br /> Love Story with <br />
                  <span className="swayamvaram-heading">Swayamvaram.</span>
                </h1>
              </div>
              <div className="left-paragraph">
                <p className="sub__text">
                  Where Destiny and Dedication Intertwine. <br />
                  Guiding Souls to Perfect Matches Divine. <br />
                  Embark on Your Journey to Everlasting Love.{" "}
                </p>
              </div>

              <div className="left-circle-images-main">
                <img src="./ellipse-71@2x.png" className="circle-one" alt="" />
                <img src="./ellipse-72@2x.png" className="circle-two" alt="" />
                <img
                  src="./ellipse-73@2x.png"
                  className="circle-three"
                  alt=""
                />
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
      </div>
      {/* profile content */}
      <div className="profile-main">
        <div className="profile-left">
          <div className="head-section-profile">
            <h2>Find that special </h2>
            <h2>someone.</h2>
          </div>
          <div className="sub-left-profile">
            <p>By gender</p>
            <p>Groom</p>
            <p>Bride</p>
          </div>

          <FindProfileComponent />
          <FindProfileComponent />

          <FindProfileComponent />

          <FindProfileComponent />

          <FindProfileComponent />
        </div>
        <div className="profile-right">
          <div className="head-section-profile">
            <h2>Brides in Kerala</h2>
          </div>
          <ProfileRight />
          <ProfileRight />

          <ProfileRight />

          <ProfileRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
