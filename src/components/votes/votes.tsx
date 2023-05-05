import { useState } from "react";
import './votes.css'



export function VotesComponent( ){
    const [strawberry, setStrawberry] = useState(0);
    const [chocolate, setChocolate] = useState(0);
    const [vanilla, setVanilla] = useState(0);
    
    const total = vanilla + chocolate + strawberry;
    const vanillaPercentage = total > 0 ? Math.round(vanilla/total * 100) : 0;
    const chocolatePercentage = total > 0 ? Math.round(chocolate/total * 100) : 0;
    const strawberryPercentage = total > 0 ? Math.round(strawberry/total * 100) : 0;


    const vanillaStyle = {
        width: '50%'
    }

    return <div className="votes">Votes Component
    <h1>Vote Here</h1>
    <button onClick={()=> setChocolate(chocolate + 1)}>Chocolate: </button>
    <button onClick={()=> setVanilla (vanilla + 1)}>Vanilla: </button>
    <button onClick={()=> setStrawberry(strawberry + 1)}>Strawberry: </button>


    <div>
        <label>Chocolate {chocolate} {chocolatePercentage}%</label>
        <div style={{
            width: `${chocolatePercentage}%`
        }} className="progress chocolate"></div>
    </div>
    <div>
        <label>Vanilla {vanilla} {vanillaPercentage}%</label>
        <div style={{
            width: `${vanillaPercentage}%`
        }} className="progress vanilla"></div>
    </div>
    <div>
        <label>Strawberry {strawberry} {strawberryPercentage}%</label>
        <div style={{
            width: `${strawberryPercentage}%`
        }} className="progress strawberry"></div>
    </div>

    </div>
}