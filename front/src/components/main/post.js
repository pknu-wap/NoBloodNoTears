import React, { Component } from 'react'

export default class Post extends Component {
    constructor(props){
        super(props);   
    }

    render() {
    return (
        <div key={this.props.key} className="post">
            <h2 name='title'>{this.props.title}</h2>
            <p name='body'>{this.props.body}</p>
        </div>
    )
    }
}
