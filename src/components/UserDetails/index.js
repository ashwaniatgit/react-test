import React from "react";

export default function UserDetails(props) {
  const { user } = props;
  const gender = user.women ? 'women' : 'men';

  return (
    <div>
      <img alt="user" src={`https://randomuser.me/api/portraits/${gender}/${user.id}.jpg`} width="100" height="100"></img>
      <h4>id: {user.id}</h4>
      <h4>{user.name}</h4>
      <h4>{user.email}</h4>
      <h4>{user.phone}</h4>
      <h4>{user.city}</h4>
    </div>
  );
}
