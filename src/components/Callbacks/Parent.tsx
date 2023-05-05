import { Child } from "./Child"



export function Parent( ){

    return(
<div>
    <Child name="Henry" getAttention={name => console.log(`!!!!${name} wants your attention`)}/>
</div>



    )

}