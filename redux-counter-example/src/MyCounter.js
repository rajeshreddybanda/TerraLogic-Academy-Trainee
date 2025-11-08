import React from "react";
import {useSelector , useDispatch} from "react";
import { increment,decrement,reset } from "./action";


export default function Counter(){
    //SELECT PART OF STATE

    const value = useSelector((state) => state.Counter.value);
    const dispatch = useDispatch();


    return(
        <div style ={{textAlign:"center",marginTop:40}}>
            <h1>Counter:{value}</h1>
        <div style={{display:"flex", justifyContent:"center", gap:8}}>
            <button onClick={() => dispatch(decrement())}>-1</button>
            <button onClick={() => dispatch(increment())}>+1</button>
            <button onClick={() => dispatch(decrement(5))}>+5</button>
            <button onClick={() => dispatch(reset())}>Reset</button>
        </div>
        </div>
    );
    }
