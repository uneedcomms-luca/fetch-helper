import { Button, Input } from "antd";
import React from "react";
import styled from "styled-components";
import useInput from "../../../popup/utils/hooks/useInput";

const NotMatchingPage = () => {
  const { value, onChange } = useInput("");

  const onClick = () => {
    window.location.href = `https://oauth2-gateway.keepgrow.com/cms/setting/processes/${value}/modify`;
  };

  return (
    <Wrapper>
      <Input value={value} onChange={onChange} onPressEnter={onClick} placeholder="process 번호를 입력하세요" />
      <Button size="large" type="primary" block onClick={onClick}>
        이동
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

export default NotMatchingPage;
