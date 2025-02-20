import { Button, message } from "antd";
import React from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";
import BottomLayout from "../../../../../components/layout/bottom";
import { useNavigate } from "react-router-dom";

const Cafe24ManagePage = () => {
  const onClickButton = (num) => {
    const buttons = document.querySelectorAll("#main_design_card_edit_button") as NodeListOf<HTMLButtonElement>;
    try {
      buttons[num]?.click();
    } catch (e) {
      message.error("버튼을 찾을 수 없습니다.");
    }
  };

  const navigate = useNavigate();

  const onClickNewPatch = () => {
    usePatchData.updateStep(1, navigate);
    usePatchData.endPatch();
    window.location.href = "https://gateway.keepgrow.com/cms/main";
  };
  const onClickEnd = () => {
    usePatchData.endPatch();
  };

  return (
    <Wrapper>
      <div className="title">PC , 모바일 환경 세팅을 시작합니다. 패치를 마쳤다면 완료를 눌러주세요.</div>
      <div className="button_box mt-3">
        <Button color="geekblue" type="primary" onClick={() => onClickButton(0)}>
          PC 편집
        </Button>
        <Button color="geekblue" type="primary" onClick={() => onClickButton(1)}>
          MOBILE 편집
        </Button>
      </div>

      <BottomLayout>
        <Button color="danger" type="primary" size="large" block onClick={onClickNewPatch}>
          새 패치 시작
        </Button>
        <Button color="danger" type="primary" size="large" block onClick={onClickEnd} className="button_warning">
          패치 종료
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .button_box {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export default Cafe24ManagePage;
