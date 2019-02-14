import React, {Component} from 'react';

export class ContentSection extends Component{
    render(){
        return <div id='contentSection'>{this.props.value}</div>;
    }
}