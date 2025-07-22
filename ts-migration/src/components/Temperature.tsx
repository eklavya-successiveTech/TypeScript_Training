//Create a functional component named Weather that accepts a prop called temperature (a number).
// Display a message like "It's sunny today!" if the temperature is above 25°C and "It's cold today!" if the temperature is below 10°C.
// Import and render the Weather component in the App component with different temperature values.

import React from 'react'

type Props={
    temp:number;

}
const Temperature = ({temp}:Props) => {
  
    let message;
   if(temp >=25){
           message="a sunny day";
        }
        else if(temp<10){
           
              message= "it's a cold Day";
        }
       else{
          message=" Normal day {temp}";
       }
  return (
    <>
    <h2> Temperature :{message}</h2>
      
    </>
  )
}

export default Temperature;
