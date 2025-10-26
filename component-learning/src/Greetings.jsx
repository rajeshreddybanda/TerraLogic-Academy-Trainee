import exp from "constants";

function Greeting(props) {
return(
 <div>
 {props.isLoggedIn?(
    props.isAuthorised? <h1> you are authorised</h1>:<h1> you are not allowed</h1>
):(
 <h1>Please Log In</h1>
)}
 </div>
);
}
export default Greeting;