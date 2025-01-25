import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { usePatchData } from "../../../../../../popup/store/patchData";
import { Button } from "antd";

const Cafe24LoginPage = () => {
  const [userInfo, setUserInfo] = useState({ id: "", password: "" });

  const getUserInfo = async () => {
    const patchData = await usePatchData.getData();
    if (patchData) {
      setUserInfo(patchData.userInfo);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const onClick = () => {
    const idElement = document.querySelector("#mall_id");
    const pwElement = document.querySelector("#userpasswd");

    if (!idElement || !pwElement) {
      return;
    }
    idElement.setAttribute("value", userInfo.id);
    pwElement.setAttribute("value", userInfo.password);

    const loginButton = document.querySelector(".mButton > button") as HTMLButtonElement;
    loginButton?.click();
  };

  return (
    <Wrapper>
      <div className="title">CAFE24 로그인</div>
      <div>부운영자 로그인은 직접 로그인 해주세요</div>
      <div className="mt-3 flex_box">
        <div>ID : {userInfo.id}</div>
        <div>PW : {userInfo.password}</div>
      </div>
      <div className="mt-3">
        <Button size="large" className="btnStrong" type="primary" block onClick={onClick}>
          로그인
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Cafe24LoginPage;
