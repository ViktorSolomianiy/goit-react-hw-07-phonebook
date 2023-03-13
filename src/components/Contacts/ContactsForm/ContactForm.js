import { useDispatch } from 'react-redux';
import './ContactForm.css';

import { addContacts } from 'redux/slices/contactsSlice';

export const ContactsForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(addContacts(name, number));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="form__contaiter">
      <label className="form__label--name">Name</label>
      <input
        className="form__input--name"
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />

      <label className="form__label--name">Number</label>
      <input
        className="form__input--name"
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />

      <button className="form__btn" type="submit">
        Add contact
      </button>
    </form>
  );
};
