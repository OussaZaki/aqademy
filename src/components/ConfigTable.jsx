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

export default function ConfigTable({ configs }) {
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
          {configs.map(config => (
            <TableRow key={config.integration}>
              <TableCell component="th" scope="row">
                {config.integration}
              </TableCell>
              <TableCell align="right">{config.tms}</TableCell>
              <TableCell align="right">{config.environment}</TableCell>
              <TableCell align="right">
                <Chip
                  clickable
                  label={config.status ? 'active' : 'inactive'}
                  className={classes.chip}
                  onClick={() => console.log('incative')}
                  color={config.status ? 'primary' : 'secondary'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
