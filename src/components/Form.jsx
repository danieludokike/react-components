import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "", 
            post:[]
        }
    }

    componentDidMount() {
        fetch(
            "https://jsonplaceholder.typicode.com/posts"
            ).then(response => response.json()
            ).then(data => this.setState({post:data}))
    }

    usernameHandler = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordHandler = (event) => {
            this.setState({
                password: event.target.value
    })
    }

  render() {
    const {posts} = this.state
    return (
      <div className='container'>
        <input onChange={this.usernameHandler} value={this.state.username} type="text" name="username" placeholder="Enter your username" id="" className='form-control' /><br />
        <input onChange={this.passwordHandler} value={this.state.password} type="password" name="password" placeholder='Enter your password' className='form-control' id="" />
        <br />
        <button className='btn btn-primary'>Click Me</button>

        {/* {posts.map(post => <h1 key={post.id}>{post.title}</h1>)} */}
      </div>
    )
  }
}

export default Form
