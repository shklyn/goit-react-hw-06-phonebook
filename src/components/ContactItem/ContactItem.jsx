import { Button, Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </Button>
    </Item>
  );
};
