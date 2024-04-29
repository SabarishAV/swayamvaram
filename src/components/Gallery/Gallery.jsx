import React from "react";
import "./Gallery.css";
import g1 from "../../assets/g1.png";
import g2 from "../../assets/g2.png";
import g3 from "../../assets/g3.png";
import g4 from "../../assets/g4.png";
import g5 from "../../assets/g5.png";
import g6 from "../../assets/g6.png";
import g7 from "../../assets/g7.png";

const Gallery = () => {
  return (
    <div className="Parent_Gallery">
      <section className="section">
        <div className="container">
          <div className="Gallery_sec">
            <div className="left">
              <p>Collection</p>
              <h3>Photo gallery</h3>
            </div>
            <div className="right">
              <button>See All</button>
            </div>
          </div>
          <div className="Gallary_images">
            <img src={g1} alt="" />
            <img src={g2} alt="" />
            <img src={g3} alt="" />
            <img src={g4} alt="" />
          </div>
          <div className="Gallary_image_next">
            <img className="g1_img" src={g5} alt="" />
            <img className="g1_img" src={g6} alt="" />
            <img className="g7" src={g7} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
