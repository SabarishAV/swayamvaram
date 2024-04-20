import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Trusted.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Trusted = () => {
  return (
    <div className="parent">
      <h1 className="trusted-heading">
        Trusted by Over <span className="trusted-span">1600+ Couples</span>
      </h1>
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        <div className="rectangle-parent">
          <div className="frame-child4" />
          <img className="frame-child5" alt="" src="/rectangle-8762@2x.png" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="lorem-ipsum-dolor">
            I had an amazing experience on the Trusted Section of the
            matrimonial website. The thorough verification process gave me peace
            of mind.
          </div>
          <div className="anjana">Amaya</div>
          <div className="malappuram-kerala">Malappuram, Kerala</div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child4" />
          <img className="frame-child5" alt="" src="/rectangle-8762@2x.png" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="lorem-ipsum-dolor">
            I felt confident exploring profiles, knowing that each member had
            been carefully vetted for authenticity.
          </div>
          <div className="anjana">Febinas</div>
          <div className="malappuram-kerala">Alappuza, Kerala</div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child4" />
          <img className="frame-child5" alt="" src="/rectangle-8762@2x.png" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="lorem-ipsum-dolor">
            I can't thank the Trusted Section enough for the seamless and secure
            experience it provided. 
          </div>
          <div className="anjana">anjana</div>
          <div className="malappuram-kerala">Trivandrum, Kerala</div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child4" />
          <img className="frame-child5" alt="" src="/rectangle-8762@2x.png" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="lorem-ipsum-dolor">
            The level of
            trust and authenticity among members was palpable, making it easy
            for me to navigate through profiles and find someone truly
            compatible.
          </div>
          <div className="anjana">Swathi</div>
          <div className="malappuram-kerala">Calicut, Kerala</div>
        </div>
        <div className="rectangle-parent">
          <div className="frame-child4" />
          <img className="frame-child5" alt="" src="/rectangle-8762@2x.png" />
          <div className="frame-child6" />
          <div className="frame-child7" />
          <div className="frame-child8" />
          <div className="lorem-ipsum-dolor">
            The attention to detail in verifying member profiles ensured that my
            interactions were meaningful and genuine, leading to promising
            connections
          </div>
          <div className="anjana">Hari</div>
          <div className="malappuram-kerala">Malappuram, Kerala</div>
        </div>
      </Carousel>
    </div>
  );
};
export default Trusted;
