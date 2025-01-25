import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";

const Cafe24ManagePage = () => {
  const onClickPc = () => {
    const el = document.querySelector("#main_design_card_edit_button") as HTMLButtonElement;
    el?.click();
  };
  const onClickMobile = () => {
    const el = document.querySelector("#main_design_card_edit_button") as HTMLButtonElement;
    el?.click();
  };

  const onClickEnd = () => {
    usePatchData.endPatch();
  };

  return (
    <Wrapper>
      <div className="title">PC , 모바일 환경 세팅을 시작합니다. 패치를 마쳤다면 완료를 눌러주세요.</div>
      <div className="flex_box mt-3">
        <Button size="large" color="geekblue" type="primary" block onClick={onClickPc}>
          PC 편집
        </Button>
        <Button size="large" color="geekblue" type="primary" block onClick={onClickMobile}>
          MOBILE 편집
        </Button>
        <Button size="large" color="danger" type="primary" block onClick={onClickEnd}>
          종료
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Cafe24ManagePage;
