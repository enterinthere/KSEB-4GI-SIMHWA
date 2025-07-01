import { useState } from "react";
import CountButtons from "./countButton";
import CountDisplay from "./countDisplay";

function CountContainer() {

    const [num, setNum] = useState(0)
    


    const change = function(amount) {
        
        setNum(() => amount + num)
    }

    return ( 
        <>
            <div>Count Container</div>
            <div className="m-3 p-3 bg-amber-400">
                <CountDisplay value={num} name={'홍길동'}></CountDisplay>
                <CountButtons fn={change}/>
            </div>
        </>
     );
}

export default CountContainer;