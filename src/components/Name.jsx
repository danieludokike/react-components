import React, {Component} from "react";


class Name extends Component {
    constructor() {
        super();
        this.state = {
            name: "Daniel",
            items: ["Item1", "Item2", "Item3"]
        }
    }

    clickMe = () => {
        this.setState({
            name: this.state.name === "Daniel"? "Udokike" : "Daniel"
        })
    }
    render() {
        return (
            <div>
                <p>Item List</p>
                <ul>
                    {this.state.items.map(item => <li key={item}>{item}</li>)}
                </ul>
            <h1 className="bg-primary text-white text-center">{this.state.name}</h1>
            <button onClick={this.clickMe} className="btn btn-success">Change Text</button>
            </div>
        );
    }
}


export default Name