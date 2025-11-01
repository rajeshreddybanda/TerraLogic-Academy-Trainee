import React ,{Component}from "react";

type IState = {
    count : number;
};
type IProps = {};
class LifeCycleDemo extends Component<IProps, IState> {
    constructor(props:IProps){
        super (props);
        this.state = { count:0};
        console.log("Constructor: component called and created");
    }

static getDerivedStateFromProps(props:any,state:any){    
        console.log("getDerivedStateFromProps: sync props if it needed ");
        return null; // no change to state
}

componentDidMount(){  
    console.log("componentDidMount: component mounted");}

shouldComponentUpdate(nextProps: any, nextState: any) {
    console.log("shouldComponentUpdate:","yes");
    return true; // allow re-rendering
}

getSnapshotBeforeUpdate(prevProps: any, prevState: any) {
    console.log("getSnapshotBeforeUpdate: just before DOM is updated");
    return null;   
}


componentDidUpdate(prevProps: any, prevState: any , snapshot:any){
    console.log("componentDidUpdate: component updated");   
}

componentWillUnmount(){
    console.log("componentWillUnmount: component is being removed");   
}

increment = () => {
    this.setState({ count: this.state.count + 1 });
};

    render() {
        console.log("render: component is rendering");
        return (
            <div>
                <h2>  Life Cycle Demo component </h2>        
                <p>Count: {this.state.count}</p>  
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }  
}

export default LifeCycleDemo;