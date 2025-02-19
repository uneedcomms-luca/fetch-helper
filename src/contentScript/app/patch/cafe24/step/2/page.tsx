import { Button, message } from "antd";
import React from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { useNavigate } from "react-router-dom";
import BottomLayout from "../../../../../components/layout/bottom";

const CAFE24_ID = "CAFE24_ACCOUNT_SHOP_ID";
const CAFE24_PW = "CAFE24_ACCOUNT_PASSWORD";

const MatchingPage2 = () => {
  const navigate = useNavigate();
  const onClickSaveAccount = async () => {
    const userInfo = { id: "", password: "" };

    document.querySelectorAll("tr.asset-row").forEach((element) => {
      const labelSpan = element.querySelector("td:nth-of-type(2) .d-inline");

      if (labelSpan && labelSpan.textContent.trim() === CAFE24_ID) {
        const inputField = element.querySelector(
          "td:nth-of-type(3) .d-inline input"
        ) as HTMLInputElement;

        if (inputField) {
          userInfo.id = inputField.value.trim();
        }
      }
      if (labelSpan && labelSpan.textContent.trim() === CAFE24_PW) {
        const inputField = element.querySelector(
          "td:nth-of-type(3) .d-inline input"
        ) as HTMLInputElement;

        if (inputField) {
          userInfo.password = inputField.value.trim();
        }
      }
    });
    await usePatchData.saveUserInfo(userInfo);

    if (!userInfo.id || !userInfo.password) {
      alert("아이디와 비밀번호를 찾을 수 없습니다.");
      return;
    }
  };

  const onClickHostingBuild = () => {
    const button = document.querySelector(
      "#build-cafe24-init"
    ) as HTMLButtonElement;
    if (button) button.click();
  };
  const onClickJsBuild = () => {
    const button = document.querySelector(
      "#build-integratedScript-init"
    ) as HTMLButtonElement;
    if (button) button.click();
  };
  const onClickNext = () => {
    onClickSaveAccount();
    message.success("계정 저장이 완료되었습니다. 다음 단계로 이동합니다.");
    setTimeout(() => {
      usePatchData.updateStep(3, navigate);
      window.location.href = window.location.href.replace("/modify", "");
    }, 1000);
  };

  return (
    <Wrapper>
      <div className="sub_title">
        <div>계정 저장, 호스팅사 빌드</div>
        <div>통합 JS 빌드를 차례로 눌러주세요</div>
      </div>

      <div className="button_box">
        <Button color="geekblue" variant="solid" onClick={onClickHostingBuild}>
          호스팅사 빌드
        </Button>
        <Button color="orange" variant="solid" onClick={onClickJsBuild}>
          통합 JS 빌드
        </Button>
      </div>

      <BottomLayout>
        <Button size="large" type="primary" block onClick={onClickNext}>
          완료
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .sub_title {
    margin-bottom: 20px;
    font-size: 15px;
    font-weight: bold;
    color: #333;
  }
  .button_box {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-bottom: 20px;
  }
`;

export default MatchingPage2;
