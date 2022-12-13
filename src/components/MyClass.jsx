import React, {Component} from "react";


class MyClass extends Component {
    
    render() {
        return(
            <>
            <h1 className="bg-primary text-white text-center"> My email:  {this.props.email}</h1>
            <button onClick={this.props.click} className="btn btn-primary">Click</button>
            </>
        ); 
        }
}

export default MyClass
