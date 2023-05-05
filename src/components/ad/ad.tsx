import './ad.css'


export function Ad(props: {flavor: string, fontSize: number, darkTheme: boolean}){
    
    return(
        <div className="ad-component">
            <h3>Vote For</h3>
            <h2>{props.flavor}</h2>
        </div>
    )}
