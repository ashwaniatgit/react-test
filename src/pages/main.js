import React, { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from '../components/Context';
import { Box } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Main() {
  const { user } = useContext(UserContext);
  const history = useHistory();

  const handleUserClick = (userId) => {
    history.push({ pathname: `/${userId}` });
  };

  return (
    <Box maxWidth={800} padding={10}>
      <Box mb={3}>
        <h2>Random User Test : Ashwani Yadav</h2>
      </Box>
      {user && user.length && user.map((u) => (
          <Box 
            key={u.id} 
            onClick={() => handleUserClick(u.id)}
            style={{ marginTop: 10, marginBottom: 10, cursor: 'pointer' }}>
            <Card detail={u}></Card>
          </Box>
        ))}
    </Box>
  );
}
