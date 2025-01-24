import { Button } from "antd";
import React from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const FetchPage = () => {
  const params = useParams();
  const hosting = params.hosting;

  return (
    <Wrapper>
      <div className="title">{hosting} 패치 진행중..</div>
      <div className="mt-3">
        <Button size="large" type="primary" block>
          <Link to="/main">종료</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default FetchPage;
