import { Button, Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import useInput from "../../utils/hooks/useInput";

const PopupLoginPage = () => {
  const { value: id, onChange: onChangeId } = useInput("");

  const { value: password, onChange: onChangePassword } = useInput("");

  const onSubmit = () => {
    console.log(id, password);
  };

  return (
    <section>
      <Wrapper>
        <div className="input_wrapper">
          <Input size="large" placeholder="킵그로우 아이디를 입력해 주세요" value={id} onChange={onChangeId} />
          <Input
            size="large"
            placeholder="비밀번호를 입력해 주세요"
            value={password}
            onChange={onChangePassword}
            type="password"
          />
        </div>

        <Button size="large" type="primary" block onClick={onSubmit}>
          로그인
        </Button>
      </Wrapper>
    </section>
  );
};
const Wrapper = styled.div`
  .input_wrapper {
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default PopupLoginPage;
