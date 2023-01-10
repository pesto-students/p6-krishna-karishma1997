import React, { useState } from "react";
import "./index.css";
import { useSelector } from "react-redux";
export function Room() {

const isLight = useSelector(state=>state.lightSwitch)
console.log(isLight,"dfcgvhbjnm");


  const [state, setState] = useState({ isLightOn: true });
  const flipLight = () => {
    setState({ isLightOn: !state.isLightOn })
  }
  const lightedness = state.isLightOn ? "lit" : "dark";

  
  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={flipLight}>flip</button>
    </div>
  )
}
