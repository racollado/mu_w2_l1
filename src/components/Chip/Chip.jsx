import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, onclick = {}, onclickX}) {
  let buttonClassName = "chip "
  if (isActive) {
    buttonClassName += "active "
  }
  return (
    <button onClick={() => onclick()} className={buttonClassName}>
      <p className="label">{label}</p>
      <span className="close" role="button" onClick={() => onclickX()}>{`X`}</span>
    </button>
  )
}

export default Chip
