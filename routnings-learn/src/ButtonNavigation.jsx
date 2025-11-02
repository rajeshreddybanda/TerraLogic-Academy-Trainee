import{useNavigate} from 'react-router-dom'

export function Form (){
    const navigate   = useNavigate();

    const handleSubmit = () =>{
        navigate ('/about');
    };

    return(
        <form onSubmit={handleSubmit}>
            <button type ="submit">Submit</button>
        </form>
    );
}
