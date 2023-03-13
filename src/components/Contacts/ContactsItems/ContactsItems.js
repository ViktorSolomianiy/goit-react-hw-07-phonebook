import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsItems = ({ contacts }) => {
  const dispatch = useDispatch();

  return (
    <>
      {contacts.map(contact => {
        return (
          <li className="contacts__item" key={contact.id}>
            <b>{contact.name}:</b> {contact.phone}
            <button
              className="contacts__btn"
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
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
