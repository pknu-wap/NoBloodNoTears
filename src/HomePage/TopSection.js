import React, {Component} from 'react';

export class TopSection extends React.Component{
    render(){
        const headerStyle={
            background: '#1E90FF',
            color: '#F0FFFF',
            marginTop: '-5px',
            padding: '10px'
            };
        return(
            <h1 style={headerStyle}>부경위키</h1>

        );
    }
}
