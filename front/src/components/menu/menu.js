import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Menu extends Component {
    constructor(props){
        super(props)
        this.state = {
            new: []
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            this.setState({
                new: [ <li className='new'>{nextProps.newPost.title}</li>, ...this.state.new]
            })
        }
    }
    
    render() {
        return (
            <div id='menu'>
                <h3>최근 변경된 문서</h3>
                <ul>
                    {this.state.new}
                </ul>
            </div>
        )
    }
}

Menu.propTypes = {
    newPost: PropTypes.object
};

const mapStateToProps = state => ({
    newPost: state.posts.item
});


export default connect(mapStateToProps, {} )(Menu);