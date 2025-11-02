import { useState } from "react";

export function CustomForm(){
    const [formData,  setFormData] = useState({name:"",email:""});
    const handleChange =(e) =>{
        const {name , value} =e.target;
        setFormData((prevData)=> ({...prevData,[name]:value}));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };
return(
    <form onSUbmit = {handleSubmit}>
        <input
        type = "text"
        name ="name"
        value ={formData.name}
        onChange= {handleChange}
        />
        <input
        type = "email"
        name ="Email"
        value ={formData.Email}
        onChange= {handleChange}
        />
        <button type ="submit" >Submit</button>
    </form>
)
}