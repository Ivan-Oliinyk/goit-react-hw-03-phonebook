import { css } from "styled-components";

export const styleInput = css`
  input {
    padding: 10px 15px;
    border-radius: 5px;
    min-height: 30px;
    display: block;
    min-width: 75%;
    font-size: 16px;
  }
`;

const FormContentStyle = css`
  margin: 10px auto;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 90%;

  label {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 54px;
    margin-bottom: 10px;
    ${styleInput}
  }
`;

export default FormContentStyle;
