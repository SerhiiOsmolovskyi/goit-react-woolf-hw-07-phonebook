import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import css from './ContactList.module.css';
import { selectVisibleContacts } from 'reduxPhoneBook/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);

  return (
    <ul className={css.contactList}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
