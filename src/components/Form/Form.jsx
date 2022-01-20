import { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import FormContentStyle from "./FormStyles";
import Button from "../Button/Button";

const FormContent = styled.form`
  ${FormContentStyle}
`;

export default class Form extends Component {
  state = { name: "", number: "" };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <FormContent onSubmit={this.handleSubmit}>
        <label>
          <h3>Name :</h3>
          <input
            type="text"
            name="name"
            placeholder="Enter name ..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            onChange={this.handleChange}
            value={this.state.name}
          />
        </label>
        <label>
          <h3>Number :</h3>
          <input
            type="text"
            name="number"
            placeholder="+38(0XX)-XXX-XX-XX"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            onChange={this.handleChange}
            value={this.state.number}
          />
        </label>
        <Button type="submit">Add Contact</Button>
      </FormContent>
    );
  }
}
