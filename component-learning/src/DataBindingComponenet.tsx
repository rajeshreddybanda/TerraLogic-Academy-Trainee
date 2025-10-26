import React, { useState } from 'react'; 


const  DataBinding = () =>{
    const[inputVal,setInputVal]=useState<string>('')
    const [password,serpassword]= useState('')
    const submitHandler =(e:any)=>{
        e.preventDefault();
        console.log('submitting:',inputVal)
        console.log('submitting password:',password)
    }
    const handleType = (e:any) =>{
        setInputVal(e.target.value)
        console.log('typed characetr:',e.target.value)
    }

    const handlePassword =(e:any) =>{
        serpassword(e.target.value)  
    }

    return(
        <form onSubmit ={submitHandler }>
            <input type = "text" placeholder='Enter your name' value={inputVal} onChange={handleType} />
             <input type = "password" placeholder='Enter your password' value={password}  onChange={handlePassword} />
            <button>Submit</button>
        </form>
    )
       

}
export default DataBinding;

