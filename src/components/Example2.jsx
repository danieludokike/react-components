import React, { Component } from 'react'

export class Example2 extends Component {
    getNames(names) {
        return names.map( name => 
            <div>{name}</div>
            )
    }
  render() {
    return (
      <div>
        {this.getNames(this.props.languages)}
      </div>
    )
  }
}

export default Example2
