import React, {Component} from 'react';
import './UploadFile.css'

class UploadFile extends Component{

    render(){
        
        return(
          <div>
              <h1 className="MainTitle"><a>윤예영</a>(새 문서 생성)</h1>
              <a href="https://forum.theseed.io/topic/232/%EC%9D%98%EA%B2%AC%EC%88%98%EB%A0%B4-%EB%A6%AC%EB%8B%A4%EC%9D%B4%EB%A0%89%ED%8A%B8-%EB%AC%B8%EB%B2%95-%EB%B3%80%EA%B2%BD">
              [의견수렴] 리다이렉트 문법 변경</a><br/>
              <button>편집</button>
              <button>미리보기</button>
              <br/>
              <textarea className="WriteContext"/>
              <div></div>

          </div>
        );
    }
}
export default UploadFile;