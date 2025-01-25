import { Button } from "antd";
import React from "react";
import styled from "styled-components";

const NotMatchingPage4 = () => {
  const onClick = () => {
    window.location.href = "https://eclogin.cafe24.com/Shop";
  };
  return (
    <Wrapper>
      <Button size="large" color="geekblue" type="primary" block onClick={onClick}>
        로그인 페이지로 이동
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.div``;

export default NotMatchingPage4;
