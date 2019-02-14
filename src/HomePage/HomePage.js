import React, { Component } from 'react';
import {TopSection} from './TopSection';
import {Homepage} from './HomePageDec.css';
import {ContentSection} from '../ContentSection';

export class HomePage extends Component{
    constructor(props){
        super(props);
        
        this.state={
            name: '부경위키: 대문',
            hashTag: '#tag',
            hashTagLink: '',
            editedTime: '2019-02-08',
            content: '내용 들어갈 곳...'
        };

    }
    render(){
    const OptionBtn={
    RightBtn:['역링크','편집','역사']
    };

   

        return (
           <div style={{padding: '5px'}}>
                <TopSection />
                <div id='titleStyle'>{this.state.name}</div>

                <div style={{textAlign:'end'}}>
                <button className='buttonStyle' >{OptionBtn.RightBtn[0]}</button>
                <button className='buttonStyle' id='editBtn'>{OptionBtn.RightBtn[1]}</button>
                <button className='buttonStyle'>{OptionBtn.RightBtn[2]}</button>
                </div>
                <div style={{textAlign: 'end'}}> 최근 수정 시각: {this.state.editedTime}</div>
            <div className='box'>
                분류: <a href={this.state.hashTagLink}>{this.state.hashTag}</a>
            </div>

            <br/>
            <ContentSection value={this.state.content}/>
            

            </div>
            

        );
    }
}
