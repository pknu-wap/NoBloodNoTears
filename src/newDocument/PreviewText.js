import React, {Component} from 'react';

export class PreviewText extends Component{
    render(){
       
        return(
        <textarea id="previewTextarea" value={this.props.value}></textarea>
        );
    }
}