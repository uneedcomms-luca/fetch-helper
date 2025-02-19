import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { usePatchData } from "../../../popup/store/patchData";

interface Props {
  steps: { step: number; title: string }[];
  step: number;
}

const PatchStepHeader = ({ steps, step }: Props) => {
  const navigate = useNavigate();
  const onClick = (step: number) => {
    usePatchData.updateStep(step, navigate);
  };
  return (
    <Wrapper>
      {step && (
        <div className="step_now">{`${step}. ${steps[step - 1].title}`}</div>
      )}

      <div className="step_wrapper">
        {steps.map((s) => (
          <div
            key={s.step}
            onClick={() => onClick(s.step)}
            className={s.step === step ? "step active" : "step"}
          >
            {s.step}
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 20px;
  .step_now {
    margin: 10px 0;
    color: #333;
    font-weight: bold;
    margin-bottom: 20px;
    border-bottom: 0.5px solid #f3f3f3;
  }
  .step_wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px 20px 20px;
    border-bottom: 1px solid #e9e9e9;
  }

  .step {
    padding: 10px 0;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f9f9f9;
    border-radius: 50%;
    color: #999;
    cursor: pointer;
  }

  .active {
    color: #ffffff;
    background-color: #5a57f3;
    font-weight: bold;
  }
`;

export default PatchStepHeader;
