import React from "react";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import "./Profile.css";

const Profile = () => {
  const card = [
    {
      image: "fa-solid fa-user-plus",
      head: "Registration",
      text: "Sign up for our matrimonial event online or in person to begin your journey towards finding your perfect match.",
    },
    {
      image: "fa-solid fa-hands-holding",
      head: "Personalized Care",
      text: "Our team of expert trainers will provide personalized care, offering fitness advice and valuable suggestions to ensure you're at your best when meeting your match.",
    },
    {
      image: "fa-solid fa-hand-holding-heart",
      head: "Matching",
      text: "Our sophisticated matching algorithm will carefully analyze your preferences and characteristics to pair you with compatible potential partners.",
    },
    {
      image: "fa-solid fa-heart",
      head: "Meet Your Match",
      text: "Once a suitable match is found, we'll arrange a meeting, providing guidance and support to ensure a successful encounter.",
    },{
      image: "fa-solid fa-handshake",
      head: "Follow-up Support",
      text: "After your initial meeting, we'll continue to offer support and assistance as you navigate your relationship, ensuring your journey towards love is smooth and fulfilling.",
    }
  ];
  return (
    <div>
      <section className="section profileParent">
        <div className="container">
          <div className="Profile_Head">
            <h3 className="head_Profile">How we match a profile?</h3>
          </div>
          <div className="Profile_cards">
            {card.map((item) => (
              <div className="Profile_Crad">
                {/* <img src={item.image} alt={item.head} /> */}
                <i className={item.image}></i>
                <h3>{item.head}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Profile;
