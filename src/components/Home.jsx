import React from "react";
import "../styles/home.css";
import fran from "../assets/fran.jpg";
import Proyects from "./Proyects";
// import flowersBack from '../assets/background-letter.jpeg';

export default function Home() {
     const title = Array.from("FRANCISCO UBERTO");
     // console.log(title);
     const text =
          "I sculpt my musical ideas with intuition from withing the digital side of sound, exploring it's differents aspects, such as speed, textures, harmony, and silence.";

     return (
          <main>
               <article>
                    <div className="text-wrapper">
                         <div className="titleName">
                              <p className="letters">{title}</p>
                         </div>
                         <div className="presentation-container">
                              <p className="presentation-text">{text}</p>
                         </div>
                    </div>
                    <div className="photo-wrapper">
                         <img
                              src={fran}
                              alt="portrait of francisco uberto"
                         ></img>
                    </div>
               </article>
               <Proyects />
          </main>
     );
}
