import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "./usersSlice";
import { Link } from "react-router-dom";

const UsersList = () => {
  const allUsers = useSelector(selectAllUsers);
  const renderUsers = allUsers.map((user) => (
    <li key={user.id}>
      <Link to={`/user/${user.id}`}>{user.name} </Link>
    </li>
  ));
  return (
    <section>
      <h2>Users</h2>
      <ul>{renderUsers}</ul>
    </section>
  );
};

export default UsersList;
