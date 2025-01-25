import { Button } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PopupMainPage = () => {
  const [user, setUser] = useState({
    userName: "유니드컴즈_루가",
    email: "luca.im@uneedcomms.com"
  });

  return (
    <Wrapper>
      <div className="user_info">
        <div>
          <strong>{user.userName}님</strong> 환영합니다.
        </div>
        <div>{user.email}</div>
      </div>

      <div className="flex_box mt-3">
        <Button size="large" block disabled>
          검수 시작하기
        </Button>
        <Button size="large" type="primary" block>
          <Link to="/patch">패치 시작하기</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .user_info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .flex_box {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export default PopupMainPage;
