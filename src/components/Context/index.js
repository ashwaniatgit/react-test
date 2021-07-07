import React, { useEffect, useState, createContext } from 'react';


export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUsers] = useState([]);


  useEffect(() => {
    const handleUser = () => {
      fetch('https://607a90abbd56a60017ba2c5e.mockapi.io/Customer')
      .then(response => response.json())
      .then(data => setUsers(data));
    };

    handleUser();
  }, []);

  if(!user.length) {
    return <></>
  }
  
  return (
    <UserContext.Provider value={{user}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;