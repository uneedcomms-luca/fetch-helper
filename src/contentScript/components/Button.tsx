import React from "react";
import styled from "styled-components";
import { theme } from "../style/theme";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.button`
  width: 100%;
  padding: 10px 0;
  background-color: ${theme.color.main};
  color: ${theme.color.secondary};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: all 0.3s;
  &:hover {
    opacity: 0.8;
  }
`;

export default Button;
