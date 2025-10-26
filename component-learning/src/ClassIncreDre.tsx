import React , {Component}  from 'react';

// Define Props Type 
interface Props{}
// Define State Type
interface State{
    count:number;
}

class Counter extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state = {
            count:0,
        };
    }

// method to handle increment
 increment = () => {
    this.setState({count : this.state.count + 1});

 };
 // method to handle decrement
 decrement = () => {
    this.setState({count : this.state.count - 1});
};
    render(){
        return(
            <div style ={{textAlign:'center', marginTop:'50px' }}>
                <h2>Count : {this.state.count} </h2>
                   <button onClick={this.decrement} style={{marginRight:'10px'}}>-</button>
                     <button onClick={this.increment}>+</button>
            </div>
        );
    }   
}     


export default Counter;
