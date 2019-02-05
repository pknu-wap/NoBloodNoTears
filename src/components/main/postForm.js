import React from 'react';

export default class PostForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e){
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data => console.log(data));

    }


    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit} >
                    <h3>title</h3>
                    <input type='text' name='title' onChange={this.handleChange} value={this.state.title}/>
                    <h3>body</h3>
                    <textarea type='text' name='body' onChange={this.handleChange} value={this.state.body}/><br/>
                    <button type='submit'>Submit</button>
                </form>
                <br/><hr/>
            </div>
        )
    }
}