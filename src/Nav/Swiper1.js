import React, { useEffect, useState } from "react";
import "./Swiper1.css"

let currentPosition = -960
let handler = false
let grapPosition = null
let checked = 1
const $carousel_items = document.getElementsByClassName("carousel-item")

export default function Swiper({images}) {
    const [state, setState] = useState({
        checked: 1,
        allowChanging: false
    })

    function onChangeValue(event) {
        setState({... state, 
            checked: event.target.value,
            allowChanging: true
        })
      }
    

  function checkStateButton() {
    if (state.allowChanging == true) {
        console.log('allowed')
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
            console.log(currentPosition)
            Array.from($carousel_items).forEach(item => {
              item.style.transform = `translateX(${currentPosition}px)`;
              item.style.transition = "400ms"})
      
              setTimeout(() => {
                Array.from($carousel_items).forEach(item => {
                  item.style.transition = "none"})
              },400)
      
          } else {
            currentPosition = -960 - 1100 * (images.length - 1)
            console.log(currentPosition)
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
        return console.log('not allowed')
    } 
  }

  function changeButtonPosition() {
      const index = Math.floor(currentPosition / -960)
      if( index <= images.length - 1 ) {
        setState({ ... state, checked: index})
    } else {
        setState({ ... state, checked: 0})
    }
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
        
        if (start - (end + 200) > 0) {
          changeRight()
        } else if (end - (start + 200) > 0 ) {
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
      if (currentPosition != -3160 ) {
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
          currentPosition = -3160
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
    setPosition()
    checkStateButton()
  })

  return (
    <>
    <div className="carousel-arrow carousel-arrow__left" onClick={changeLeft}></div>
    <div className="carousel-arrow carousel-arrow__right" onClick={changeRight}></div>
    <div className = "nav-container">
                <input 
                    type="radio" 
                    className = "radio" 
                    value = "1"
                    name="gender" 
                    checked = {state.checked == 1}
                    onChange = {(event) => onChangeValue(event)} /> 
                <input 
                    type="radio" 
                    className = "radio" 
                    value = "2"
                    name="gender"
                    checked = {state.checked == 2}
                    onChange = {(event) => onChangeValue(event)} /> 
                <input 
                    type="radio" 
                    className = "radio" 
                    value= "0"
                    name="gender"
                    checked = {state.checked == 0}
                    onChange = {(event) => onChangeValue(event)} />
            </div>
    </>
  )
}
