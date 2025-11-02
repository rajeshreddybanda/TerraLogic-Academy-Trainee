import MyInput from "./MyInput";

const MyForm = () => {
    const formConfig = {
        name : {
            label : "Your Name",
            type : "text",
            validation : {required:true},
        },

        email:{
            label : "Your Email",
            type : "Email",
            validation : {required:true ,isEmail :  true},
            },
             password:{
            label : "Your password",
            type : "password",
            validation : {required:true },
        }
    }
        
return(
    <form>
        {Object.keys(formConfig).map((key) => (
         <MyInput 
         key ={key}
         label = {formConfig[key].label}   
         type = {formConfig[key].type}
         password = {formConfig[key].password}  
         /> 
        ))}
    </form>
)}

export default MyForm
