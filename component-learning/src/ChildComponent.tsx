//import exp from "constants";

function ChildComponent(props:any) {
    return (
        <button onClick={props.onButtonClick}>
        Click Me to alert Parent
        </button>
    );
}

export default ChildComponent;