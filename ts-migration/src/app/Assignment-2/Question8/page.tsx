"use client";
import { useEffect, useState } from "react";

const Slideshow = () => {
  const [number, setNumber] = useState<number>(1);
  const [time, setTime] = useState<number>(2);
  const [play, setPlay] = useState<boolean>(true);

  useEffect(() => {
    if (!play) return;
    const speed = time*1000;
    const id = setInterval(() => {
      setNumber((prev) => prev>=10 ? 1:prev+1);
    }, speed);
    return () => clearInterval(id);
  }, [time,play]);

  const timeChange = (value:number) =>{
    setTime(value);
  }
  const playPause = () =>{
    setPlay(()=> !play);
  }

  const source = `image${number}.jpg`
  useEffect(() => {
    console.log(source);
  }, [source]);

  return (
    <div>
      <img src={source} width={500} height={500} />
      <p>Time Delay in seconds:</p>
      <input key="number" value={time} onChange={(e)=>timeChange(Number(e.target.value))}/>
      <button onClick={playPause}>{play ? "Playing ⏸️" : "Paused ▶️"}</button>
    </div>
  );
};
export default Slideshow;