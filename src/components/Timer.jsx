// import React ,  { useState } from 'react'
// import { Link } from "react-router-dom";

// export default function Timer() {
//     const [seconds, setSeconds] = useState([15]);

//     if (seconds > 0) {
//         setSeconds(({ seconds }) => ({
//             seconds: seconds - 1
//         }))
//     }
//     return (

//         <div>
//            { seconds === 0
//                     ?<Link to="/unsuccessful">
//                     <h1>Game Over</h1>
//                     </Link>
//                     : <h1 className="timer">Remaining Time: {}:{seconds < 10 ? `0{seconds}` : seconds}</h1>
//                 }
//         </div>
//     )
// }
