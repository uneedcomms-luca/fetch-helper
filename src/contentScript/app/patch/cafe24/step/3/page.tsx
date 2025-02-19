import { Button, Checkbox, message } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../../../../../../popup/utils/hooks/useInput";
import TextArea from "antd/es/input/TextArea";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { useNavigate } from "react-router-dom";
import BottomLayout from "../../../../../components/layout/bottom";

const createContent = (src, dataEnv = false) =>
  `<!-- Uneedcomms Keepgrow Script -->
<div module="member_login" style="display:none !important"></div>
<script id="kg-service-init" data-hosting="cafe24" src="${src}" ${
    dataEnv ? 'data-env="mobile"' : ""
  }></script>
<!-- Uneedcomms Keepgrow Script -->`;

const MatchingPage3 = () => {
  const [src, setSrc] = useState("");
  const navigate = useNavigate();
  const { value: dataEnvMobile, onChange } = useInput(false);
  const {
    value: textAreaValue,
    setValue: setTextAreaValue,
    onChange: onChangeTextValue,
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
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="mt-3">
        <div className="input_checkbox_label">
          data-env <Checkbox checked={dataEnvMobile} onChange={onChange} />
        </div>
        <div className="input_desc mt-2">
          시크릿모드 - PC, 모바일 - 회원가입 페이지 agreement.html 경우에만 해당
          - 사용 여부 확인
        </div>
        <div className="input_desc">data-env="mobile" 삽입</div>
      </div>

      <div className="mt-4">
        <div className="input_label">통합 JS - CAFE24</div>
        <TextArea
          autoSize={{ minRows: 10 }}
          size="small"
          onChange={onChangeTextValue}
          value={textAreaValue}
        />
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
