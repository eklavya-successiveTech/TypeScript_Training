"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const imageList = [
  "/Images/education.jpeg",
  "/Images/girl.jpg",
  "/Images/image-1.jpeg",
  "/Images/image-3.jpg",
  "/Images/image-4.jpg",
  "/Images/image-5.jpeg",
  "/Images/Image-7.jpeg",
  "/Images/image-8.jpeg",
  "/Images/images-9.jpeg",
  "/Images/image-10.jpeg",
];

const SlideShow=()=> {
  const [index, setIndex] = useState(0);
  const [play, setPlay] = useState(true);
  const [intervalTime, setIntervalTime] = useState(3000); // 3 seconds default

  useEffect(() => {
    if (!play) return;

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % (imageList.length-1));
    }, intervalTime);

    return () => clearInterval(timer);
  }, [play, intervalTime]);

  return (
    <div style={{ width: 600, margin: "auto" }}>
      <div style={{ position: "relative", height: 400 }}>
        <Image
          src={imageList[index]}
          alt={`Slide ${index + 1}`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div style={{ marginTop: 10 }}>
        <button onClick={() => setPlay(!play)}>
          {play ? "Pause" : "Play"}
        </button>
      </div>
      <div style={{ marginTop: 10 }}>
        <label>
          Slide Interval (ms):
          <input
            type="number"
            min={1000}
            max={10000}
            step={500}
            value={intervalTime}
            onChange={(e) => setIntervalTime(Number(e.target.value))}
            disabled={!play}
          />
        </label>
      </div>
    </div>
  );
}
export default SlideShow;