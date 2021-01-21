import React from "react";
import "./Carousel.css"
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import swiper from "./swiper";


function Carousel() {
    swiper()
    return (
        <>
        <div className="carousel-container">
            <div className="carousel-track">
                <div className="carousel-item">
                    <div className="shadow"></div>
                    <img className="image" src={image1}></img>
                </div>
                <div className="carousel-item">
                    <img className="image" src={image2}></img>
                </div>
                <div className="carousel-item">
                    <div className="shadow"></div>
                    <img className="image" src={image3}></img>
                </div>
                <div className="carousel-arrow carousel-arrow__left"></div>
                <div className="carousel-arrow carousel-arrow__right"></div>
            </div>
        </div>
        </>
    )
}

export default Carousel 