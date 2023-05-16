import { Ul } from './ContactsList.styled';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice/contactsSlice';
import { getFiltedContacts } from 'redux/filterSlice/filterSlice';
import { getVisibleContacts } from 'helperFunctions/helperFunctions';

export const ContactsList = () => {
  const { numbers } = useSelector(getContacts);
  const filter = useSelector(getFiltedContacts);
  return (
    <Ul>
      {getVisibleContacts(numbers, filter).map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            name={name}
            number={number}
            id={id}
          />
        );
      })}
    </Ul>
  );
};