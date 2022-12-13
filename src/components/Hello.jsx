import React from "react";

function Clickme() {
    alert("The button is clicked");
}

function Hello(props) {
    return (
        <div className="container">
            <h1>MY name is: {props.name}</h1>
            <button onClick={Clickme} className="btn btn-success">Click Me</button>
        </div>

    );
}

export default Hello