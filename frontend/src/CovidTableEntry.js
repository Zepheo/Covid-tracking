import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';

export default function CovidTableEntry({rowData}) {
  return (
    <TableRow
      hover
      tabIndex={-1}
    >
      <TableCell component="th" scope="row">
        {rowData.name}
      </TableCell>
      <TableCell align="right">{rowData.hospitalizedCurrently || 'No information available'}</TableCell>
      <TableCell align="right">{rowData.lastThreeDayDeaths}</TableCell>
    </TableRow>
  )
};
