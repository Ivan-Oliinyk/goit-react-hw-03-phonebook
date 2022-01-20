import PropTypes from "prop-types";
import styled from "styled-components";
import ContactListItem from "./ContactListItem";

const List = styled.ul`
  border-radius: 5px;
  list-style: none;
  background-color: green;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0;

  li {
    min-width: 90%;
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid transparent;
    transition: all 300ms linear;

    &:hover,
    &:focus {
      color: black;
      border: 1px solid black;
      background-color: white;
    }

    button:hover,
    button:focus {
      background-color: red;
      color: white;
    }
  }

  li:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;
export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => onDeleteContact(id)}
        />
      ))}
    </List>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
