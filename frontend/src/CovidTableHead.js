import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  head: {
    backgroundColor: '#1976d2',
    color: '#fff',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const headCells = [
  { 
    id: 'state',
    numeric: false,
    label: 'State',
    toolTip: ''
  },
  { 
    id: 'hospitalizedCurrently',
    numeric: true,
    label: 'Currently hospitalized',
    toolTip: 'Amount of people currently hospitalized in the state'
  },
  { 
    id: 'lastThreeDayDeaths',
    numeric: true,
    label: 'Total new covid 19 deaths during the last 3 days',
    toolTip: 'Amount of people that have died in the state during the last 3 days'
  }
];

export default function CovidTableHead({ order, orderBy, onRequestSort }) {
  const classes = useStyles();
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
          className={classes.head}
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          sortDirection={orderBy === headCell.id ? order : false}
          >
            <Tooltip
            title={headCell.toolTip}
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
                >
                {headCell.label}
                {orderBy === headCell.id ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                  </span>
                ) : null}
              </TableSortLabel>
            </Tooltip>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}