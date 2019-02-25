import React,{Component} from 'react';

export class EditText extends Component{
    render(){
        return <textarea id="editTextarea" className={this.props.cl} onChange={this.props.onChange} />;
    }
}
