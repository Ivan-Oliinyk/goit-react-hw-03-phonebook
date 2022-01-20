import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 10px;
  border: 2px solid black;
  cursor: pointer;
  text-transform: uppercase;
`;

const Button = ({ children, onClick }) => {
  return <ButtonComponent onClick={onClick}>{children}</ButtonComponent>;
};

Button.propTypes = {
  onClick: propTypes.func,
};

export default Button;
