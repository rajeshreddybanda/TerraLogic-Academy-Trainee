import { useState } from "react";

function useToggle (initialValue =true){
    const [togglee,setTogglee]=useState(initialValue)
    const handleToggle=()=>{
        setTogglee((prev)=>!prev)
    }
    return [togglee,handleToggle]
}
export default useToggle