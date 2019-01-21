import React,{Component} from 'react';

export class EditText extends Component{
    render(){
        return <textarea id="editTextarea" className="WriteContext" onChange={this.props.onChange} />;
    }
}
