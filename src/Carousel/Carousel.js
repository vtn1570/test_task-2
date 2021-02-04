import React from "react";
import "./Carousel.css"
import template from "./template";
import image1 from "../images/image1.jpg"
import image2 from "../images/image2.jpg"
import image3 from "../images/image3.jpg"
import image4 from "../images/image4.jpg"
import image5 from "../images/image5.jpg"
import Nav from "../Nav/Nav";

const images = [image1, image2, image3, image4, image5] // add new images in carousel

export default function Carousel() {
    const mediaQuery = window.matchMedia("(max-width: 800px)")
    if(mediaQuery.matches) {
        console.log('gggod')
    }
    return (
        <>
        <div className="carousel-container">
            <div className="carousel-track">
                {template(images)}
                <Nav images = {images}/>
            </div>
        </div>
        </>
    )
}
