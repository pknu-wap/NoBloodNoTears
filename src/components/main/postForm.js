import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createPost } from '../../actions/postAction';

class PostForm extends React.Component{
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

        this.props.createPost(post);
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

PostForm.propTypes = {
    createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);