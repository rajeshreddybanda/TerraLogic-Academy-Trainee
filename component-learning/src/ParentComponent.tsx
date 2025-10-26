import ChildComponent from "./ChildComponent";
function ParentComponent(props:any) {
    const handleChildClick = () => {
        alert("alert from child");
    
};

return (
    <ChildComponent onButtonClick={handleChildClick} />
);
}

export default ParentComponent;