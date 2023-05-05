import { useState } from "react";



export function Typing( ){

    const [message, setMessage] = useState('');

        return(
            <div>
                {/* <input value={message} onChange={e =>setMessage(e.target.value)} /> */}

                {message}

            </div>
        )

}


export function Circle( ){
    const [value, setValue] = useState('');

    const handler = (event: any) => {
        setValue(event.target.value);
    }

    const circleSize = value ? parseInt(value) * 10 : 0;
    
    return(
        <div>
                   <div>

                   <input type="number" value={value} onChange={handler} />
                    <div style={{ width: circleSize, height: circleSize, borderRadius: '50%', backgroundColor: 'red' }}></div>


                <input></input>
            Diameter
            <input type="checkbox"></input>Is Circle?
            </div>
        </div>
    )



}