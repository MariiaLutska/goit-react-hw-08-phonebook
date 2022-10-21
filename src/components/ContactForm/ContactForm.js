import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import { Box } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { ContactButton } from '../Button/Button';
import { FormLabel } from '@chakra-ui/react';

let nameId = nanoid();
let numbId = nanoid();

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

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
    <Box>
      <form onSubmit={handleSubmit} autoComplete="off">
        <FormLabel>
          Name
          <Input
            variant="filled"
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
        </FormLabel>
        <FormLabel>
          Number
          <Input
            variant="filled"
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
        </FormLabel>
        <ContactButton type="submit">Add contact</ContactButton>
      </form>
    </Box>
  );
};
