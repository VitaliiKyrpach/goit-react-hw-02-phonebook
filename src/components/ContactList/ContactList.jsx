import { ContactItem } from 'components/ContactItem/ContactItem';
export const ContactList = ({ data, deleteFunc }) => {
  return (
    <ul>
      {data.map(({ id, name, number }) => {
        return (
          <ContactItem
            key={id}
            id={id}
            name={name}
            number={number}
            deleteBtn={deleteFunc}
          />
        );
      })}
    </ul>
  );
};
