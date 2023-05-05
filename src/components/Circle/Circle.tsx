import { useState } from "react";
import './Circle.css'



export function Circle( ){

    const [size, setSize] = useState(100);
    const [isCircle, setIsCircle] = useState(false);

    
    return(
        <div>


                <input value={size}  onChange={e=> setSize(+e.target.value)}/>
                
                
                <label>
                    Diameter
                <input type="checkbox" checked={isCircle} onChange={e =>setIsCircle(e.target.checked)}/>Is Circle?
                </label>


            <div className = {isCircle ? 'shape circle' : 'shape'} style={{
                width: `${size}px`,
                height: `${size}px`
            }}></div>

            </div>
            )

}