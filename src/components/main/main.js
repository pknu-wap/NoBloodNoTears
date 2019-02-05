import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './post';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

class Main extends Component {
    componentWillMount(){
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        console.log(this.props.posts);
        console.log(this.props.posts.map);
        const post_list = this.props.posts.map( post => (
            <Post key={post.id} title={post.title} body={post.body} />
        ));
        return (
            <div id='main'>
                <h1>Posts</h1>
                {post_list}
            </div>
        )
    }
}

Main.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps, {fetchPosts} )(Main);