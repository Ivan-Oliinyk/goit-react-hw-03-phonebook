import { Component } from "react";
import ContactList from "./components/ContactList/ContactList.jsx";
import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter.jsx";
import shortid from "shortid";
import styled from "styled-components";
import Title from "./components/Title/Title.jsx";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  border: 2px solid black;
  border-radius: 5px;
  max-width: 600px;
`;
export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const duplicate = this.state.contacts.find(
      (contact) => contact.name === name
    );

    if (duplicate) {
      alert(`${name} is already in contacts!`);
    } else {
      const contact = {
        name,
        number,
        id: shortid.generate(),
      };

      this.setState((prevState) => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  render() {
    const { filter } = this.state;
    const VisibleContacts = this.getVisibleContacts();

    return (
      <Container>
        <Title as="h1" size="32px">
          Phonebook
        </Title>
        <Form onSubmit={this.addContact} />
        <Title as="h2" size="26px">
          Contacts
        </Title>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList
          contacts={VisibleContacts}
          onDeleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
