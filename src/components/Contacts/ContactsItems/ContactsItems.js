import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/slices/contactsSlice';

export const ContactsItems = ({ contact }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className="contacts__item">
      <b>
        {contact.name}: {contact.number}
      </b>
      <button className="contacts__btn" type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactsItems.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
