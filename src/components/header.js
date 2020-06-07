import React from "react"

// Available props: headerText, insideText
export default function Header(props) {
  return (
    <div>
        <h1>{props.headerText}</h1>
        <p>{props.insideText}</p>
    </div>    
  )
  
}