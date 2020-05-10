import React from 'react';
import { TableCell, TableHead, TableRow, TableSortLabel} from '@material-ui/core';

const headCells = [
  { id: 'state', numeric: false, disablePadding: true, label: 'State' },
  { id: 'hospitalizedCurrently', numeric: true, disablePadding: false, label: 'Currently hospitalized' },
  { id: 'lastThreeDayDeaths', numeric: true, disablePadding: false, label: 'New deaths during the last 3 days' }
];

export default function CovidTableHead({ order, orderBy, onRequestSort }) {
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
          key={headCell.id}
          align={headCell.numeric ? 'right' : 'left'}
          padding={headCell.disablePadding ? 'none' : 'default'}
          sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              >
              {headCell.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}