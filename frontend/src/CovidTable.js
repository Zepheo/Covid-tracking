import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Table, TableBody, TableContainer, Paper, CircularProgress } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import CovidTableEntry from './CovidTableEntry';
import CovidTableHead from './CovidTableHead';

function sorter(order, orderBy) {
  return function (a, b) {

    if (a[orderBy] === b[orderBy]) {
        return 0;
    }
    else if (a[orderBy] === null) {
        return 1;
    }
    else if (b[orderBy] === null) {
        return -1;
    }
    else if (order === 'asc') {
        return a[orderBy] < b[orderBy] ? -1 : 1;
    }
    else { 
        return a[orderBy] < b[orderBy] ? 1 : -1;
    }
  };
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    margin: theme.spacing(2),
  },
  table: {
    minWidth: 700,
  },
  container: {
    maxHeight: '96vh',
  },
  loading: {
    textAlign: 'center',    
  }
}));

export default function CovidTable() {
  const classes = useStyles();
  const [CovidData, setCovidData] = useState(undefined);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  
  const handleRequestSort = (_event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  useEffect(() =>{
    Axios.get('/api/covid')
      .then(res => setCovidData(res.data));
  }, []);

  if (!CovidData) {
    return (
      <div className={classes.loading}>
        <CircularProgress />
      </div>
    );
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer className={classes.container}>
          <Table
            className={classes.table}
            stickyHeader
          >
            <CovidTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(CovidData, sorter(order, orderBy))
                .map((row) => <CovidTableEntry key={row.state} rowData={row} />)}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};
