import React ,{useState,useEffect} from "react";

const FunctionalLifeCycle: React.FC = () => {
    const [count, setCount] = useState<number>(0);

// run once on when component mount

    useEffect(() => {
        console.log("component mounted");

// runs when component unmounts 
        return () => {
            console.log("component unmounted");
        }   ;
    }, []);

// runs on every re-render ( update)
    useEffect(() => {
        console.log("component updated: count changed to", count );
    }, [count]);

    return (
    <div>
        <h2> Functional Life Cycle Demo component </h2>     
        <p>Count: {count}</p>  
        <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
    );
}           

export default FunctionalLifeCycle;
