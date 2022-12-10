import React from "react";
import corpus from "../data/corpus-fu.json";
// import test from "../data/test.json";
import "../styles/proyects.css";

export default function Proyects() {
     //  let d = new Date();
     //  let fecha = `${d.getFullYear()}${d.getMonth() + 1}${d.getDate()}`;
     //  console.log(fecha);

     let sortedCorpus = corpus.sort(
          (a, b) =>
               new Date(b.concerts[0].date.split("/").reverse()) -
               new Date(a.concerts[0].date.split("/").reverse())
     );

     let dates = sortedCorpus.flatMap(
          (e) =>
               `${e.name},${e.concerts.flatMap((d) => `${d.date},${d.place}`)},
               )}`
     );
     console.log(dates[0].split(","));
     console.log(sortedCorpus);

     return (
          <div className="upcoming-proyects">
               <h2>Upcomming Proyects</h2>
               <div>
                    {sortedCorpus.flatMap((e, i) => (
                         <div key={i}>
                              {e.concerts.flatMap((d, j) => (
                                   <div key={j} className="concert-info">
                                        <p className="concert-date">{d.date}</p>
                                        <p className="concert-place">
                                             {d.place}
                                        </p>
                                   </div>
                              ))}
                              <div className="glitchy-letters">{e.name}</div>
                         </div>
                    ))}
               </div>
          </div>
     );
}
