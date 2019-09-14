import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minWidth: 650
  },
  chip: {
    margin: theme.spacing(1)
  }
}));

function createData(integration, tms, environment, status) {
  return { integration, tms, environment, status };
}

const rows = [
  createData('Postnord_test', 'postnord', 'EU_TEST', true),
  createData('posti_tmp', 'ghostship', 'TMP_PT', false),
  createData('unifaun1', 'unifaun', 'US_TEST', false)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Integration</TableCell>
            <TableCell align="right">TMS</TableCell>
            <TableCell align="right">ENVIRONMENT</TableCell>
            <TableCell align="right">STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.integration}>
              <TableCell component="th" scope="row">
                {row.integration}
              </TableCell>
              <TableCell align="right">{row.tms}</TableCell>
              <TableCell align="right">{row.environment}</TableCell>
              <TableCell align="right">
                <Chip
                  clickable
                  label={row.status ? 'active' : 'inactive'}
                  className={classes.chip}
                  onClick={() => console.log('incative')}
                  color={row.status ? 'primary' : 'secondary'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
