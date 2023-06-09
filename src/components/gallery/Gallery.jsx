import React from "react";
import cl from "./Gallery.module.css";
import slide1 from "../../assets/img/flower.jpeg";
import slide4 from "../../assets/img/flower4.webp";
import slide2 from "../../assets/img/gallery-img2.jpeg";
import slide5 from "../../assets/img/gallery-img2.jpeg";
import slide3 from "../../assets/img/gallery-img3.jpeg";
import slide6 from "../../assets/img/gallery-img3.jpeg";
import icon from "../../assets/icons/titleIcon.svg";

const Gallery = ({ refOf }) => {
  return (
    <>
      <div ref={refOf} style={{ marginTop: "130px", marginBottom: "100px" }}>
        <h2 className={cl.title}>Wedding Gallery</h2>
        <img src={icon} alt="icon" />
      </div>
      <section className={cl.slider}>
        <div className={cl.slideTrack}>
          <div className={cl.slide}>
            <img className={cl.img} src={slide1} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide2} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide3} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide4} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide5} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide6} alt="img" />
          </div>
          {/* <div className={cl.slide}>
            <img className={cl.img} src={slide7} alt="img" />
          </div> */}
          <div className={cl.slide}>
            <img className={cl.img} src={slide1} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide2} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide3} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide4} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide5} alt="img" />
          </div>
          <div className={cl.slide}>
            <img className={cl.img} src={slide6} alt="img" />
          </div>
          {/* <div className={cl.slide}>
            <img className={cl.img} src={slide7} alt="img" />
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Gallery;
