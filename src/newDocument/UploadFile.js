import React, {Component} from 'react';
import './UploadFile.css'
import {EditText} from './EditText.js';
import {PreviewText} from './PreviewText';
class UploadFile extends Component{
constructor(props){
    super(props);
    this.state={
        name:'윤예영 여신',
        content:''
    }
}

handleChange=(e)=>{
    this.setState({
        content: e.target.value
    })
    console.log(this.state.content);
}

handleToggle=(toggle)=>{
    
}

    render(){
        const counter=0;
        const CHANGE_REDIRECT_DOCUMENT_URL="https://forum.theseed.io/topic/232/%EC%9D%98%EA%B2%AC%EC%88%98%EB%A0%B4-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B3%80%EA%B2%BD";        
        
        return(
          <div>
              <h1 className="MainTitle">{this.state.name} (새 문서 생성)</h1>
            
              <button id="deleteBtn">삭제</button>
              <br/>

              <a href={CHANGE_REDIRECT_DOCUMENT_URL}>[의견수렴] 리다이렉트 문법 변경</a>
              <br/>

              <button id="redirect">편집</button>
              <button>미리보기</button>
              <br/>
              
              <EditText   value={this.state.content} onChange={this.handleChange} visibility={true}/>
              <PreviewText value={this.state.name + '\n' +this.state.content }/>
              <br/>
                <button>저장</button>
          </div>
        );
        
    }
}
export default UploadFile;
