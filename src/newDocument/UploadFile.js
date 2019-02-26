import React, {Component} from 'react';
import './UploadFile.css';
import {EditText} from './EditText.js';
import {PreviewText} from './PreviewText';
class UploadFile extends Component{
    
constructor(props){
    super(props);
    this.state={
        name:'윤예영 여신',
        toggle: 'show',
        toggle2:'hide',
        content:''
    }
}
//적는 부분
handleChange=(e)=>{
    this.setState({
        content: e.target.value
    });
}

//편집창 숨기기
handleToggle=(_toggle)=>{
    _toggle = this.state.toggle==='hide' ? 'show' : 'hide';
    this.setState({ toggle: _toggle});
}
//미리보기창 숨기기
handleToggle2=(_toggle2)=>{
    _toggle2=this.state.toggle2==='hide' ? 'show':'hide';
    this.setState({toggle2: _toggle2});
}

componentWillMount(){
    if(this.state.toggle === 'show') this.handleToggle2('hide');
    else if(this.state.toggle2 === 'show') this.handleToggle('hide');
};

    render(){
        const CHANGE_REDIRECT_DOCUMENT_URL="https://forum.theseed.io/topic/232/%EC%9D%98%EA%B2%AC%EC%88%98%EB%A0%B4-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B3%80%EA%B2%BD";        
   
        return(
          <div>
              <h1 className="MainTitle">{this.state.name} (새 문서 생성)</h1>
            
              <button id="deleteBtn">삭제</button>
              <button style={{marginLeft: '1px'}}>저장</button>
              <br/>
            
              <a href={CHANGE_REDIRECT_DOCUMENT_URL}>[의견수렴] 리다이렉트 문법 변경</a>
              <br/>
              <br/>

              <button onClick={this.handleToggle} className="SubTitle" >편집</button>
              <button onClick={this.handleToggle2} className="SubTitle">미리보기</button>
              
              <EditText 
              cl={this.state.toggle} 
              value={this.state.content} 
              onChange={this.handleChange} />
              
              <PreviewText 
              cl={this.state.toggle2} 
              value={this.state.name + '\n' +this.state.content }/>
              <br/>
              
          </div>
        );
        
    }
}
export default UploadFile;
