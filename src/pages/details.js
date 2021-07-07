import React, { useState, useEffect, useContext } from "react";
import { Box, Grid } from '@material-ui/core';
import { useParams } from "react-router-dom";
import UserDetails from "../components/UserDetails";
import { UserContext } from '../components/Context';

export default function Details(props) {
  const { id } = useParams();
  const { user } = useContext(UserContext);
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    const setUserDetail = () => {
      const detail = user.filter((d) => d.id === id);
      setDetail(detail[0]);
    };

    setUserDetail();
  }, []);

  return (
    <Box bgcolor="#f5f5f5" padding={1}>
      <Grid container>
          {detail && <UserDetails user={detail}></UserDetails>}
      </Grid>
    </Box>
  );
}
