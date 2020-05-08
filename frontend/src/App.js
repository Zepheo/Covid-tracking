import React from 'react';
import { Container, Typography } from "@material-ui/core";
import Box from '@material-ui/core/Box';

function App() {
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

export default App;
