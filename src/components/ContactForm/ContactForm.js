import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import css from './ContactForm.module.css';

let nameId = nanoid();
let numbId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // const [id, setId] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   const form = e.currentTarget;
  //   dispatch(
  //     addContact({
  //       name: form.elements.name.value,
  //       number: form.elements.number.value,
  //     })
  //   );
  //   form.reset();
  // };
  const handleInputChange = e => {
    const { name, value } = e.target;
    // setId(nanoid());

    if (name === 'name') {
      return setName(value);
    } else if (name === 'number') {
      return setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    let data = { name, number };
    let findName = contacts.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );

    if (findName) {
      return alert(`${data.name} is already in contact`);
    } else {
      dispatch(addContact(data));
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          Name
          <input
            onInput={handleInputChange}
            value={name}
            type="text"
            name="name"
            placeholder="Enter name..."
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nameId}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            onInput={handleInputChange}
            value={number}
            type="tel"
            name="number"
            placeholder="Enter number..."
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={numbId}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </div>
  );
};
