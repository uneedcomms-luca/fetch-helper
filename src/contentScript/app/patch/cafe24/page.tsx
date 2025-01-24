import React from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import PatchStepHeader from "../../../components/patch/StepHeader";
import Cafe24Step1 from "./step/1/page";
import Cafe24Step2 from "./step/2/page";

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
      {step === 1 && <Cafe24Step1 />}
      {step === 2 && <Cafe24Step2 />}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

export default PatchCafe24Page;
