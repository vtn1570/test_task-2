import React, { useEffect, useState } from "react";
import Swiper from "./Swiper";
import "./Nav.css"

export default function Nav({images}) {
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
    
    function onChangeHandler(index) {
        if( index <= images.length - 1 ) {
            setState({ ... state, checked: index})
        } else {
            setState({ ... state, checked: 0})
        }
    }

    function positionHandler(value) {
        setState({... state, currentPosition: value})
    }

    function createButtons() {
       return new Array(images.length - 1)
            .fill("")
            .map((_, i) => (
                <input
                    key = {i} 
                    type="radio" 
                    className = "radio" 
                    value = {`${i + 1}`}
                    name="gender" 
                    checked = {state.checked == i + 1}
                    onChange = {(event) => onChangeValue(event)} 
                /> 
                )
            )
    }

    useEffect(() => {console.log(state)})
    return (
            <>
            <Swiper 
                images = {images} 
                onChangeHandler = {onChangeHandler}
                state = {state}
                setState = {setState}
                positionHandler = {positionHandler}/>  
            <div className = "nav-container">  
               {createButtons()}
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