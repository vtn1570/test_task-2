import React from "react";

export default function template(images) {  // images must be array 
    return (
      <>    
      {images.map((image, index)=> (
       <div className="carousel-item change" key = {index}>
        <img draggable="false" className="image" src={image}></img>
      </div>
      ))}
      {/* additional images */}
      <div className="carousel-item change last"> 
        <img draggable="false" className="image" src={images[0]}></img>
      </div>
      <div className="carousel-item change duplicate">
        <img draggable="false" className="image" src={images[1]}></img>
      </div>
      <div className="carousel-item change unused">
        <img draggable="false" className="image" src={images[2]}></img>
      </div>
      </>
    )
  }