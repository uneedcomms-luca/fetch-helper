import { Button, Checkbox, message } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../../../../../../popup/utils/hooks/useInput";
import TextArea from "antd/es/input/TextArea";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { useNavigate } from "react-router-dom";
import BottomLayout from "../../../../../components/layout/bottom";

const createContent = (src, dataEnv = false) => `
<!-- KeepGrow 1초 회원가입 Script -->
<!--  
================================================================================ 
  <KeepGrow 1초 회원가입 Script에 대한 안내사항> 
  - 본 스크립트는 저작권이 있는 자산으로, 다른 멀티 쇼핑몰(국내몰 및 외국어몰)에 무단 복제, 배포 등의 행위를 할 시 관련 법에 따라 제재를 받을 수 있습니다.
  - 해당 스크립트 변조로 인해 발생된 모든 오류 및 장애에 대해 당사는 책임지지 않으며, 서비스 이용에 차질이 생길 수 있습니다.
  - 이용 관련 문의 및 수정요청은 고객센터 https://pf.kakao.com/_fVBgT/chat로 문의 부탁드립니다.
================================================================================ 
-->
<div module="member_login" style="display:none !important"></div> <script id="kg-service-init" data-hosting="cafe24" src="${src}" ${
  dataEnv ? 'data-env="mobile"' : ""
}></script> 
<!-- KeepGrow 1초회원가입 Script -->
`;

const MatchingPage3 = () => {
  const [src, setSrc] = useState("");
  const navigate = useNavigate();
  const { value: dataEnvMobile, onChange } = useInput(false);
  const {
    value: textAreaValue,
    setValue: setTextAreaValue,
    onChange: onChangeTextValue
  } = useInput(createContent(src, dataEnvMobile));

  const getUrl = () => {
    const element = document.querySelector("#integratedScript");
    if (!element) return;
    const match = element.innerHTML.match(/src="([^"]+)"/);
    if (match) setSrc(match[1]);
  };

  useEffect(() => {
    getUrl();
  }, []);

  useEffect(() => {
    setTextAreaValue(createContent(src, dataEnvMobile));
  }, [src, dataEnvMobile]);

  const onClick = () => {
    usePatchData.saveScript(textAreaValue);
    message.success("스크립트가 저장되었습니다.");

    setTimeout(() => {
      usePatchData.updateStep(4, navigate);
      window.location.href = "https://eclogin.cafe24.com/Shop/";
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="mt-3">
        <div className="input_checkbox_label">
          data-env <Checkbox checked={dataEnvMobile} onChange={onChange} />
        </div>
        <div className="input_desc mt-2">
          시크릿모드 - PC, 모바일 - 회원가입 페이지 agreement.html 경우에만 해당 - 사용 여부 확인
        </div>
        <div className="input_desc">data-env="mobile" 삽입</div>
      </div>

      <div className="mt-4">
        <div className="input_label">통합 JS - CAFE24</div>
        <TextArea autoSize={{ minRows: 10 }} size="small" onChange={onChangeTextValue} value={textAreaValue} />
      </div>

      <BottomLayout>
        <Button size="large" type="primary" block onClick={onClick}>
          통합 스크립트 저장
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input_checkbox_label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
    display: flex;
    gap: 10px;
  }
  .input_desc {
    margin-top: 5px;
    font-size: 12px;
    color: #666;
    &:before {
      content: "✅ ";
    }
  }
  .input_label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
  textarea {
    font-size: 12px;
  }
`;

export default MatchingPage3;
