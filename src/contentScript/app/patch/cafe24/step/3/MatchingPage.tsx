import { Button, Checkbox } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useInput from "../../../../../../popup/utils/hooks/useInput";
import TextArea from "antd/es/input/TextArea";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { useNavigate } from "react-router-dom";

const createContent = (src, dataEnv = false) =>
  `<!-- Uneedcomms Keepgrow Script -->
<div module="member_login" style="display:none !important"></div>
<script id="kg-service-init" data-hosting="cafe24" src="${src}" ${dataEnv ? 'data-env="mobile"' : ""}></script>
<!-- Uneedcomms Keepgrow Script -->`;

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
    usePatchData.updateStep(4, navigate);
  };

  return (
    <Wrapper>
      <div className="input_label">data-env</div>
      <Checkbox checked={dataEnvMobile} onChange={onChange} />

      <div className="mt-2">
        <div className="input_label">통합 JS - CAFE24</div>
        <TextArea autoSize={{ minRows: 10 }} onChange={onChangeTextValue} value={textAreaValue} />
      </div>

      <div className="mt-2">
        <Button size="large" type="primary" block onClick={onClick}>
          통합 스크립트 저장
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .input_label {
    font-size: 14px;
    font-weight: 600;
    color: #333;
  }
`;

export default MatchingPage3;
