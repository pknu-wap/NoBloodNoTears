import React, {Component} from 'react';
import './UploadFile.css'

class UploadFile extends Component{
constructor(props){
    super(props);
    this.state={name:""};
}

    render(){
        return(
          <div>
              <h1 className="MainTitle">{this.state.name}(새 문서 생성)</h1>

              <a  href="https://forum.theseed.io/topic/232/%EC%9D%98%EA%B2%AC%EC%88%98%EB%A0%B4-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B3%80%EA%B2%BD">
              [의견수렴] 리다이렉트 문법 변경</a><br/>

              <button id="redirect">편집</button>
              <button>미리보기</button>
              <br/>
              <textarea className="WriteContext"/>

              <div id="summary">요약<br/></div>
              <input id="summaryInput"/>
              <br/>

              <input type="checkbox"/> 문서 편집을 <b>저장하면</b> 당신은 기여한 내용을 <b>CC-BY-NC-SA 2.0 KR</b>으로 배포하고 기여한 문서에 대한 하이퍼링크나 URL을 이용하여 저작자 표시를 하는 것으로 충분하다는 데 동의하는 것입니다. 이 <b>동의는 철회할 수 없습니다.</b>

          </div>
        );
    }
}
export default UploadFile;
