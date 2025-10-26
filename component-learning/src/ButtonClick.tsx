

function ButtonClick() {
    
    const handleclick = () => {
        alert("Button Clicked")
    };
    
    return (
            <button onClick={handleclick}>Click Me</button>
        );
}

export default ButtonClick;






export function welcome ()
{
    const welcoming = () => {
        alert ("welcoming to Welcome Component")
    };

    return (
        <button onClick={welcoming} >Touch</button>
    )

}


