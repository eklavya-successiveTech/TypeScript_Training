// 8.Use the useEffect hook to manage the current slide and transition.
// Add few images atleast 10 in public folder to populate the slideshow.
// Allow users to pause, play the slideshow.
// Include a time interval option to control the automatic slideshow progression.

"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
interface Props {
  images: string[];
}

const Transition = ({images}:Props) => {
    const[message,setMessage]=useState<number>(3000);
    const[index,setIndex]=useState<number>(0);
    const[play,setPlay]=useState<boolean>(true);


    useEffect(()=>{

        if(!play) return;
        const id=setInterval(()=>{
          setIndex((prev)=>(prev+1)%images.length);
        },message);
        return ()=>clearInterval(id);

    },[play,images.length,message]);


  return (
<>
          <Image
          src={images[index]}
          alt={`Slide ${index + 1}`}
          width={500}
          height={300}
        />
        <div style={{ marginTop: "10px" }}>
        <button onClick={() => setPlay(!play)}>
          {play ? "Pause" : "Play"}
        </button>
        </div>
     <input
        type="number"
       value={message}
       onChange={(e) => setMessage(Number(e.target.value))}
        />


</>
  )
}

export default Transition;
