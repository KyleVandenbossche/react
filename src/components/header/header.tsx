import './header.css'
import { useState } from 'react';


// interface Props{
//     name: string;
// }

export function Header ( {user} : {user: string}){
   return (
    <header>
        <style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Pacifico&display=swap');
</style>
        <h1 className="ice-cream">Ice Cream Wars </h1>
        <h2 className="welcome">Welcome  {user}</h2>
        </header>
   )
}

export function Ad(props: {flavor: string, fontSize: number, darkTheme: boolean}){
    const [flavor, setFlavor] = useState("Strawberry");
    
    return(
        <div className="ad-component">
            <h3>Vote For</h3>
            <h2>{props.flavor}</h2>
        </div>
    )}
