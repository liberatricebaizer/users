import "./addUser.css";

const AddUser = ({ onAdd }) => {
  const handlerSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = "";
    e.target.email.value = "";
  };
  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <input placeholder="Name" name="name" />
        <input placeholder="Email" name="email" />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddUser;
