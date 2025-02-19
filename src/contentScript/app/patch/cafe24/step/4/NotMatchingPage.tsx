import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import BottomLayout from "../../../../../components/layout/bottom";

const NotMatchingPage4 = () => {
  const onClick = () => {
    window.location.href = "https://eclogin.cafe24.com/Shop";
  };
  return (
    <Wrapper>
      <div className="title">CAFE24 로 이동합니다.</div>
      <div className="sub_title"></div>
      <BottomLayout>
        <Button
          size="large"
          color="geekblue"
          type="primary"
          block
          onClick={onClick}
        >
          이동
        </Button>
      </BottomLayout>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default NotMatchingPage4;
