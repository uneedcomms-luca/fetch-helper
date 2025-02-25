import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import PatchStepHeader from "../../../components/patch/StepHeader";
import UpdateMetaJson from "./step/updateMetaJson/route";
import Cafe24Step2 from "./step/buildScript/route";
import Cafe24Step3 from "./step/updateScript/route";
import Cafe24Step4 from "./step/injectScript/route";
import BuildScript from "./step/buildScript/route";
import UpdateScript from "./step/updateScript/route";
import InjectScript from "./step/injectScript/route";

const PatchCafe24Page = () => {
  const params = useParams();
  const step = Number(params.step);

  const steps = [
    { step: 1, title: "metaJson 수정" },
    { step: 2, title: "JS 파일 빌드" },
    { step: 3, title: "통합스크립트 내용 수정" },
    { step: 4, title: "CAFE24 편집" }
  ];

  return (
    <Wrapper>
      <div className="title">CAFE24</div>
      <PatchStepHeader steps={steps} step={step} />
      {step === 1 && <UpdateMetaJson />}
      {step === 2 && <BuildScript />}
      {step === 3 && <UpdateScript />}
      {step === 4 && <InjectScript />}
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
