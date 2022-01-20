import propTypes from "prop-types";
import styled from "styled-components";

const Title = styled.h2`
  font-size: ${({ size }) => size || "16px"};
  font-weight: ${({ weight }) => weight || 700};
  text-align: ${({ align }) => align || "center"};
`;

Title.propTypes = {
  size: propTypes.string,
  weight: propTypes.number,
  align: propTypes.string,
};

export default Title;
