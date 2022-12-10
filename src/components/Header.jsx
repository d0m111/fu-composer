import React from 'react';
// import { useState } from 'react';
import '../styles/Header.css';

// export default function Header() {
//      const name = 'FRANCISCO UBERTO';
//      //  const lastName = ' UBERTO';
//      const title = Array.from(name);
//      //  const lastNameArr = Array.from(lastName);
//      //  console.log(title);
//      //  console.log(lastNameArr);
//      //  const title = "FRANCISCO UBERTO"
//      let arr = [1, 0, 0];
//      // const [ori, setOri] = React.useState(arr);

//      // console.log(arr.pop());

//      // console.log(ori);

//      // }

//      return (
//           <header className="App-header">
//                {/* <div className="titleName">
//                     {nameArr.map((e, i) =>
//                          setTimeout(() => {
//                               return (
//                                    <p className="letters" key={i}>
//                                         {e}
//                                    </p>
//                               );
//                          }, 750)
//                     )}
//                </div> */}
//                <div className="titleName">
//                     {/* {ori.map((e) => (
//                          <p>{e}</p>
//                     ))} */}
//                </div>
//           </header>
//      );
// }

export default function Header() {
     // const title = Array.from('FRANCISCO UBERTO');
     // console.log(title);

     return (
          <div className="titleName">
               <p className="letters"></p>
          </div>
     );
}
