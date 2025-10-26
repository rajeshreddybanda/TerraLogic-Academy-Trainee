function WelcomeMessage(props)
{
const isLoggedIn = props.isLoggedIn;

if(isLoggedIn)  {
    return <h1>Welcome back </h1>;
} 
return <h1>Pleae isLogIn</h1>;
}  

export default WelcomeMessage;