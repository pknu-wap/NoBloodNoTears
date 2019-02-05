import React, { Component } from 'react'
import Post from './post';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: []
        }
    }

    componentWillMount(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => this.setState({ posts: data }));
    }

    updatePosts(){
        let post_list = this.state.posts.map( (post) => (
            <Post key={post.key} title={post.title} body={post.body} />
        ));
        return post_list;
    }

    render() {
        const post_list = this.updatePosts();
        return (
            <div id='main'>
                <h1>Posts</h1>
                {post_list}
            </div>
        )
    }
}
