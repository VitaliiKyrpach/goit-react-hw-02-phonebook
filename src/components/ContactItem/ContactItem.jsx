export const ContactItem = ({ id, name, number, deleteBtn }) => {
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => deleteBtn(id)}>
        Delete
      </button>
    </li>
  );
};
