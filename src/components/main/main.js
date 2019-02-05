import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Post from './post';
import { connect } from 'react-redux';
import { fetchPosts } from '../../actions/postAction';

class Main extends Component {
    componentWillMount(){
        // 기존 DB에 있는 글들을 불러오기 위함
        // 현재 DB가 없어서 임의의 JSON을 불러옴
        this.props.fetchPosts();
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.newPost){
            this.props.posts.unshift(nextProps.newPost);
        }
    }

    render() {
        const post_list = this.props.posts.map( post => (
            <Post key={post.id} title={post.title} body={post.body} />
        ));
        return (
            <div id='main'>
                <h1>문서</h1>
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