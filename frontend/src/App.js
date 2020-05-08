import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Container, Typography, Table, TableBody, TableRow, TableCell, TableHead } from "@material-ui/core";
import Box from '@material-ui/core/Box';

function App() {
  const [state, setState] = useState(undefined);

  useEffect(() =>{
    Axios.get('/api/covid')
      .then(res => setState(res.data));
  });
  if (!state) {
    return (
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" color="textPrimary" gutterBottom>
            Covid information comming here
          </Typography>
        </Box>
      </Container>
    );
  }
  return(
    <Table stickyHeader={true}>
      <TableHead>
        <TableRow>
          <TableCell>
            State
          </TableCell>
          <TableCell>
            Currently hospitalized
          </TableCell>
          <TableCell>
            New deaths during the last 3 days
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {state.map( stateInfo => {
          return(
            <TableRow>
              <TableCell>
                {stateInfo.name}
              </TableCell>
              <TableCell>
                {stateInfo.hospitalizedCurrently || 'No information available'}
              </TableCell>
              <TableCell>
                {stateInfo.lastThreeDayDeaths || 'No information available'}
              </TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

export default App;
