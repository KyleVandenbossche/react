export function Child(props: {name:string, getAttention: (name:string)=> void} ){

    return(
        <div>
            <h2>{props.name}</h2>
            <button onClick ={()=> props.getAttention(props.name)}>Get Dads Attention</button>
        </div>


    )


}