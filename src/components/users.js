import React from "react";
import "./users.css";

const Users = ({ id, name, email, onDelete }) => {
  const handlerDelete = () => {
    onDelete(id);
  };
  return (
    <div className="list">
      <span>{name}</span>
      <span>{email}</span>
      <span>
        <button onClick={handlerDelete}>Delete</button>
      </span>
    </div>
  );
};

export default Users;
