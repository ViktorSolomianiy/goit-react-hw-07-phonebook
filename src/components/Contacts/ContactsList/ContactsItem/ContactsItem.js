import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

import { SpinnerBorder } from 'components/Spinner/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

export const ContactsItems = ({ contact }) => {
  const [isDeletingContact, setIsDeletingContact] = useState(false);
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  console.log(contacts);

  return (
    <>
      {/* {contacts.map(contact => { */}

      <li className="contacts__item">
        <b>{contact.name}:</b> {contact.phone}
        <button
          className="contacts__btn"
          type="button"
          onClick={() => {
            setIsDeletingContact(true);
            dispatch(deleteContact(contact.id));
          }}
        >
          {isDeletingContact ? <SpinnerBorder /> : 'Delete'}
          {/* Delete */}
        </button>
      </li>

      {/* })} */}
    </>
  );
};

ContactsItems.propTypes = {
  contact: PropTypes.exact({
    createdAt: PropTypes.string,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
