import React from "react";
import "./Choose.css";
import man from "../../assets/man.png";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";

const Choose = () => {
  const choose = [
    {
      image: c1,
      head: "Genuine profiles",
      text: "Contact 100% genuine profiles with complete privacy",
    },
    {
      image: c2,
      head: "Most trusted",
      text: "The most trusted wedding matrimony brand with google rating of 4.5",
    },
    {
      image: c3,
      head: "1600+ weddings",
      text: "1600+ members found their life partner through Swayamvara.",
    },
  ];
  return (
    <div className="ParentChoose">
      <section className="section Choose">
        <div className="container">
          <div className="man">
            <img src={man} alt="" />
          </div>
          <div className="choose_us_box">
            <h3>Why choose us ?</h3>
            <p>Most trusted premium Matrimony service in the world</p>
          </div>
          <div className="chooses_card">
            {choose.map((item, index) => (
              <div key={index} className="choose_card">
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

export default Choose;
