import React from "react";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="Parent_why_choose">
        <div className="container">
          <div className="Why__choose" >
            <img className="user__man" src="./image-22@2x.png" alt="" />
            <div className="Whu_choose_contents">
              <h2>Why choose us ?</h2>
              <p>Most trusted premium Matrimony service in the world</p>
            </div>

            <div className="Why_choose_card">
              <div className="choose_card">
                <img src="./choosecard.png" alt="" />
                <h3>Genuine profiles</h3>
                <p>Contact 100% genuine profiles with complete privacy</p>
              </div>
              <div className="choose_card">
                <img src="./choosecard2.png" alt="" />
                <h3>Most trusted</h3>
                <p>
                  The most trusted wedding matrimony brand with google rating of
                  4.5
                </p>
              </div>

              <div className="choose_card">
                <img src="./card3.png" alt="" />
                <h3>1600+ weddings</h3>
                <p>
                  1600+ members found their life partner through Swayamvara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
