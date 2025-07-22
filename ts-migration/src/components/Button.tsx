//6.Create a functional component named Button that accepts props for text and color.
// Style the button using inline styles or CSS classes based on the color prop.
// Import and render the Button component in the App component with different text and color props.

import React from 'react'

type Props={
  text:string;
  color:string;
}

const Button = ({text,color}:Props) => {
  return (
    <div style={{marginTop:"10px"}}>
      <button style={{backgroundColor:color}}> {text}</button>
    </div>
  )
}
export default Button;
