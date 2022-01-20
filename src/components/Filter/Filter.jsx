import PropTypes from "prop-types";
import styled from "styled-components";
import { styleInput } from "../Form/FormStyles";

const FilterLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 16px;

  ${styleInput}
`;
export default function Filter({ value, onChange }) {
  return (
    <FilterLabel>
      <h3>Filter :</h3>
      <input
        type="text"
        name="name"
        placeholder="Enter some letter to search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        value={value}
        onChange={onChange}
      />
    </FilterLabel>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
