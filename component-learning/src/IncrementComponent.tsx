
import React,{useState} from "react";

function IncrementComponent() {
    const[Increment,setIncrement]=useState(0);
    const Incrementing =()=>{
        setIncrement(Increment+1);
    };
    return (
        <div>
            <p>Increment:{Increment}</p>
            <button onClick={Incrementing}>Increment</button>
           
        </div>
    );


}
export function DecrementComponent() {
    const[decrement,setDecrement]=useState(1);
    const Decrementing =()=>{
        setDecrement(decrement-1);
        if (decrement ===0)
        {
            alert("Negatibve value");
                    };
           
    };
    return (
        <div>
            <p>Decrement:{decrement}</p>
            <button onClick={Decrementing}>Decrement</button>
           
        </div>
    );


}






export default IncrementComponent;
