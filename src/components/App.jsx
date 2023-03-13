import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import './App.css';

import { ContactsForm } from './Contacts/ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts/ContactsList/ContactsList';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div>
      <h1 className="title">Phonebook</h1>

      <ContactsForm />

      <div className="contacts__container">
        <h2 className="contacts__title">Contacts</h2>

        {contacts.length !== 0 && <Filter />}
        <ContactsList />
      </div>
    </div>
  );
};
