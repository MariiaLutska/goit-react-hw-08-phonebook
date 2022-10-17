import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Box } from '../Box';
import { ContactButton } from '../Button/Button';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact));

  // const handleToggle = () => dispatch(toggleCompleted(contact));

  return (
    <Box color="primary" as="li" display="block" alignItems="center">
      {/* <label type="value" onChange={handleToggle} /> */}
      {contact.name} : {contact.number}
      <ContactButton type="button" onClick={handleDelete}>
        Delete
      </ContactButton>
    </Box>
  );
};
