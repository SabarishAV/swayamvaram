import React from "react";
import { Carousel } from "primereact/carousel";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "./Truested.css";
import slide from "../../assets/slide.png";

const Trusted = () => {
  const items = [
    {
      src: "https://via.placeholder.com/600x400?text=Image+1",
      alt: "Image 1",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "Aishwarya",
      place: "Calicut, Kerala",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+2",
      alt: "Image 2",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "harshan",
      place: "Malappuram, Kerala",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+3",
      alt: "Image 3",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "Hari krishna",
      place: "Vadakara, Kerala",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+1",
      alt: "Image 1",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "Aishwarya",
      place: "Calicut, Kerala",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+2",
      alt: "Image 2",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "harshan",
      place: "Malappuram, Kerala",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Image+3",
      alt: "Image 3",
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta, veritatis vero deserunt aut error qui enim labore nihil harum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum soluta.",
      text: "Hari krishna",
      place: "Vadakara, Kerala",
    },
  ];

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "768px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "560px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const itemTemplate = (item) => (
    <div className="carousel-item">
      {/* <img src={item.src} alt={item.alt} style={{ width: "100%" }} /> */}
      <img className="manslide" src={slide} alt="" />
      <div className="carousel-content">
        <p className="reviews">{item.title}</p>
        <h3>{item.text}</h3>
        <p style={{ color: "#000" }}>{item.place}</p>
      </div>
    </div>
  );
  return (
    <div>
      <section className="section">
        <div className="container">
          <Carousel
            value={items}
            numVisible={3}
            numScroll={1}
            responsiveOptions={responsiveOptions}
            itemTemplate={itemTemplate}
            circular={true}
            autoplayInterval={3000}
          />
          <div className="see_all_btn">
            <button>See all</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trusted;
