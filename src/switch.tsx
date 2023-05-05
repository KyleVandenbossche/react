/* tsx file returns the function or  HTML elementsd  */

import './switch.css';
import { useState } from "react";


export function Switch(){

    const [light, setLight] = useState(false);


    return (
        <div className={light ? "blue" :  ""}>
        <h2>Switch</h2>
        <h3>{light ? "ON" : "OFF"} </h3>
        <button onClick={() => setLight(true)}>On</button>
        <button onClick={() => setLight(false)}>Off</button>
        </div>
    )
}


export default Switch;