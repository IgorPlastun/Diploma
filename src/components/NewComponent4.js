import { useEffect, useState } from "react";
import React from "react";
import most from "../images/most.jpg";
import lake from "../images/lake.jpg";
import rock from '../images/rock2.jpg'
import FormAddTasks from "./FormAddTasks";
export default function NewComponent4(props) {
  // время
  const [time, setTime] = useState(
    new Date().toLocaleTimeString().slice(0, -3)
  );
  // проба рандомной картинки
  //const img1 = ['<img src="../images/lake.jpg"/>','<img src="../images/pole.jpg"/>' ]
  const img1 = [most, lake, rock];
  // автоматическое время
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString().slice(0, -3));
    }, 60 * 1000);
  });
  // проба рандомной картинки 2
  const rnd = () => {
    return Math.floor(Math.random() * img1.length);
  };
  let a = rnd(); 
  const currentImg = img1[a];
 
  return (
    <div style={{ maxWidth: "100vw" , marginBottom:'10px'}}>
      <div style={{backgroundImage: `url(${currentImg})`, minHeight: "100vh", backgroundRepeat: "no-repeat", backgroundAttachment: "fixed",
          backgroundPosition: "50%",
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "flex-end",
          flexDirection: "column",
        }}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh", flexDirection: "column", }} >
          <p style={{ color: "white",  fontSize: "100px", textShadow: "black 0 0 40px", }} >{time}</p>
          <p style={{ fontSize: "40px", color: "white" }}> Какая то мотивирующая надпись</p>
        </div>
       
      </div>    
    </div>
  );
}
