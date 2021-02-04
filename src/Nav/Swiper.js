import React, { useEffect } from "react";

let currentPosition = -960
let handler = false
let grapPosition = null

export default function Swiper({images, onChangeHandler, state, setState}) {
  const $carousel_items = document.getElementsByClassName("carousel-item")
  const coordLastImages = -960 - (images.length - 1) * 1100
  const $images = document.getElementsByClassName("image")
  console.log($images)

  function checkStateButton() {
    if (state.allowChanging == true) {
        if (state.checked == 1) {
            currentPosition = -960
      
            Array.from($carousel_items).forEach(item => {
              item.style.transform = `translateX(${currentPosition}px)`;
              item.style.transition = "400ms"})
      
              setTimeout(() => {
                Array.from($carousel_items).forEach(item => {
                  item.style.transition = "none"})
              },400)
      
          } else if (state.checked != 0) {
            currentPosition = -960 - 1100 * (state.checked - 1)
            Array.from($carousel_items).forEach(item => {
              item.style.transform = `translateX(${currentPosition}px)`;
              item.style.transition = "400ms"})
      
              setTimeout(() => {
                Array.from($carousel_items).forEach(item => {
                  item.style.transition = "none"})
              },400)
      
          } else {
            currentPosition = -960 - 1100 * (images.length - 1)
            Array.from($carousel_items).forEach(item => {
              item.style.transform = `translateX(${currentPosition}px)`;
              item.style.transition = "400ms"})
      
              setTimeout(() => {
                Array.from($carousel_items).forEach(item => {
                  item.style.transition = "none"})
              },400)
          }
          setState({...state,
            allowChanging: false
        })
    } else {
        return 
    } 
  }

  function changeButtonPosition() {
     const index = ((currentPosition + 960) / -1100) + 1
      onChangeHandler(Math.abs(index))
  }

  function setPosition() { 
    Array.from($carousel_items).forEach(item => {
      item.onmousedown = (event) => {
        const start = event.clientX 
        console.log('ss')
        item.onmousemove = (event) => {
        let moving = start - event.clientX
        grapPosition = currentPosition - moving
        Array.from($carousel_items).forEach(item => {
            item.style.transform = `translateX(${grapPosition}px)`})
        }

      item.onmouseup = (event) => {
        item.onmousemove = null
        const end = event.clientX
        
        if (start - (end + 20) > 0) {
          changeRight()
        } else if (end - (start + 20) > 0 ) {
          changeLeft()
        } else {
          returnToPrev()
        }
      }
    }
  })
}

  function changeRight() {
    if(handler === false) {
      handler = true
      if (currentPosition != coordLastImages ) {
        currentPosition -= 1100
        Array.from($carousel_items).forEach(item => {
          item.style.transform = `translateX(${currentPosition}px)`;
          item.style.transition = "400ms"})
        changeButtonPosition()
      
      setTimeout(() => {
          Array.from($carousel_items).forEach(item => {
            item.style.transition = "none"})
            handler = false
        },400)

      } else {
        currentPosition -= 1100
        Array.from($carousel_items).forEach(item => {
          item.style.transform = `translateX(${currentPosition}px)`;
          item.style.transition = "400ms"})
          
        setTimeout(()=> {
          currentPosition = -960
          Array.from($carousel_items).forEach(item => {
            item.style.transform = `translateX(${currentPosition}px)`;
            item.style.transition = "none"})
            changeButtonPosition()  
            handler = false
      },400)
      }  
    } else {
      return
    }
      
  }

  function changeLeft() {
    if(handler === false) {
        handler = true
      if (currentPosition != -960 ){
      currentPosition += 1100
      Array.from($carousel_items).forEach(item => {
        item.style.transform = `translateX(${currentPosition}px)`;
        item.style.transition = "400ms"})
        changeButtonPosition()

      setTimeout(() => {
        Array.from($carousel_items).forEach(item => {
          item.style.transition = "none"})
          handler = false
      }, 400) 
      } else {
          currentPosition += 1100
        Array.from($carousel_items).forEach(item => {
          item.style.transform = `translateX(${currentPosition}px)`;
          item.style.transition = "400ms"})

        setTimeout(() => {
          currentPosition = coordLastImages
          Array.from($carousel_items).forEach(item => {
            item.style.transform = `translateX(${currentPosition}px)`;
            item.style.transition = "none"})
            handler = false
            changeButtonPosition() 
        }, 400) 
      }
    } else {
    return 
  } 
}

  function returnToPrev() {
    Array.from($carousel_items).forEach(item => {
      item.style.transform = `translateX(${currentPosition}px)`;
      item.style.transition = "400ms"})
    setTimeout(() => {
      Array.from($carousel_items).forEach(item => {
        item.style.transition = "none"})
    },400)  
}

  useEffect(() => {
    setPosition(); 
    checkStateButton()
  })

  return (
    <>
    <div className="carousel-arrow carousel-arrow__left" onClick={changeLeft}></div>
    <div className="carousel-arrow carousel-arrow__right" onClick={changeRight}></div>
    </>
  )
}
