import React from "react";
import v1 from "../../assets/v1.png";
import v2 from "../../assets/v2.png";
import v3 from "../../assets/v3.png";
import v4 from "../../assets/v4.png";
import "./Profile.css";

const Profile = () => {
  const card = [
    {
      image: v1,
      head: "Register your profile",
      text: "Register your profile on Swayamvara for free in just a few steps.",
    },
    {
      image: v2,
      head: "Find your match",
      text: "You can easily search your soulmate of your preference.",
    },
    {
      image: v3,
      head: "Contact",
      text: "Contact them directly if the other person accept your profile.",
    },
    {
      image: v4,
      head: "Get married!",
      text: "If everything aligns, take the next big step and get married!",
    },
  ];
  return (
    <div>
      <section className="section profileParent">
        <div className="container">
          <div className="Profile_Head">
            <h3 className="head_Profile">How to match a profile?</h3>
          </div>
          <div className="Profile_cards">
            {card.map((item) => (
              <div className="Profile_Crad">
                <img src={item.image} alt={item.head} />
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
