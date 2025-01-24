import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FetchSelectPage = () => {
  const hostings = ["cafe24", "imweb", "makeshop"];
  return (
    <Wrapper>
      <div className="title">
        <div>패치할 호스팅사를 선택해주세요.</div>
      </div>
      <div className="button_wrapper mt-2">
        {hostings.map((hosting) => (
          <Button size="large" type="primary" block>
            <Link to={`${hosting}`}>{hosting.toUpperCase()} </Link>
          </Button>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default FetchSelectPage;
