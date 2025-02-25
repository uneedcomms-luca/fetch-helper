import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PatchStepHeader from "../../../components/patch/StepHeader";
import UpdateMetaJson from "./step/updateMetaJson/route";
import BuildScript from "./step/buildScript/route";
import UpdateScript from "./step/updateScript/route";
import InjectScript from "./step/injectScript/route";
import CheckHosting from "./step/checkHosting/route";

const PatchCafe24Page = () => {
  const params = useParams();
  const step = Number(params.step);

  const steps = [
    { step: 1, title: "CAFE24 확인" },
    { step: 2, title: "metaJson 수정" },
    { step: 3, title: "JS 파일 빌드" },
    { step: 4, title: "통합스크립트 내용 수정" },
    { step: 5, title: "CAFE24 편집" }
  ];

  return (
    <Wrapper>
      <div className="title">CAFE24</div>
      <PatchStepHeader steps={steps} step={step} />
      {step === 1 && <CheckHosting />}
      {step === 2 && <UpdateMetaJson />}
      {step === 3 && <BuildScript />}
      {step === 4 && <UpdateScript />}
      {step === 5 && <InjectScript />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #5a57f3;
  }
`;

export default PatchCafe24Page;
