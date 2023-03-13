import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts, getIsLoading, getError } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Toaster } from 'react-hot-toast';
import './App.css';

import { ContactsForm } from './Contacts/ContactsForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './Contacts/ContactsList/ContactsList';
import { SpinnerMutatingDots } from './Spinner/Spinner';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1 className="title">Phonebook</h1>

      <ContactsForm />

      <div className="contacts__container">
        <h2 className="contacts__title">Contacts</h2>

        {contacts.length !== 0 && <Filter />}
        {isLoading && !error && contacts.length === 0 && (
          <SpinnerMutatingDots />
        )}
        <ContactsList />
      </div>
      <Toaster />
    </div>
  );
};
