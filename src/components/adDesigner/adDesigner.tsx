import { useState } from "react";
import './adDesigner.css';


export function AdDesigner( ){

const [flavor, setFlavor] = useState("Strawberry");
const [isLightTheme, setIsLightTheme] = useState(true);
const [fontSize, setFontSize] = useState(44);

const styles = {
    fontSize: `${fontSize}px`
}

    return (
    <div className="ad">
                <style>
  @import url('https://fonts.googleapis.com/css2?family=Caveat&family=Pacifico&display=swap');
</style>
    <h2>Ad Designer</h2>

    <div className={isLightTheme ? 'light' : 'dark'} style={styles}>
    </div>
    <div>
    <h3>Vote For {flavor} </h3>
    </div>

    <h3>What to support </h3>
    <button aria-disabled={flavor === 'Vanilla'} onClick={()=> setFlavor('Vanilla')}>Vanilla</button>
    <button aria-disabled={flavor === 'Chocolate'} onClick={()=> setFlavor('Chocolate')}>Chocolate</button>
    <button aria-disabled={flavor === 'Strawberry'} onClick={()=> setFlavor('Strawberry')}>Strawberry</button>

    

    <h3>Color Theme</h3>
    <button disabled={isLightTheme} onClick={()=> setIsLightTheme(true)}>Light Theme</button>
    <button disabled={!isLightTheme} onClick={()=> setIsLightTheme(true)}>Dark Theme</button>
    
    
    <h3>Font Size </h3>
    <button onClick={() => setFontSize(fontSize - 2)}>-</button>
    <span>{fontSize}</span>
    <button onClick={() => setFontSize(fontSize + 2)}>+</button>

    </div>

    )
}