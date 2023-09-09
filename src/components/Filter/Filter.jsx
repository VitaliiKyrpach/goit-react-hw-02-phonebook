export const Filter = ({ change, value }) => {
  return (
    <div>
      <h3>Find contacts by Name</h3>
      <input type="text" name="filter" onChange={change} value={value} />
    </div>
  );
};
