import { Contact } from './Contact';
import { List } from './ContactList.styled';
export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onClick={() => onDelete(id)}
        />
      ))}
    </List>
  );
};
