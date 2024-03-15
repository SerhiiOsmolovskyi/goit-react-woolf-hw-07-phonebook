import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'reduxPhoneBook/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.appContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
