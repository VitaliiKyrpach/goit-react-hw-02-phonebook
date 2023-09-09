import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  createUser = data => {
    const check = this.state.contacts.find(({ name }) => name === data.name);
    if (check) {
      alert(`${check.name} is already in contacts.`);
      return;
    }
    this.setState(prev => {
      return {
        contacts: [...prev.contacts, data],
      };
    });
  };

  handleDelete = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const filtered = this.state.contacts.filter(user =>
      user.name.toLocaleLowerCase().includes(this.state.filter)
    );
    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm createUser={this.createUser} />
        <h2>Contacts</h2>
        <Filter change={this.handleChange} value={this.state.filter} />
        <ContactList data={filtered} deleteFunc={this.handleDelete} />
      </div>
    );
  }
}
export default App;
