import React from "react";
import { Box, Grid } from '@material-ui/core';

export default function Card(props) {
  const { detail } = props;
  const gender = detail.women ? 'women' : 'men';
  
  return (
    <Box bgcolor="#f5f5f5" padding={1}>
      <Grid container>
          <Grid item md={2}>
            <img alt="user" src={`https://randomuser.me/api/portraits/${gender}/${detail.id}.jpg`} width="100" height="100"></img>
          </Grid>
          <Grid item md={10} style={{paddingLeft: 10}}>
            <h4> {detail.id} - {detail.name}</h4>
          </Grid>
      </Grid>
    </Box>
  );
}
