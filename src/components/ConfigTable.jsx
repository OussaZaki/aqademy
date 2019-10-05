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
  },
  tableHead: {
    fontWeight: 700,
    fontSize: 16,
    color: '#000000'
  }
}));

export default function ConfigTable({ configs, onToggle, onClick }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHead}>Profile</TableCell>
            <TableCell className={classes.tableHead}>Tms</TableCell>
            <TableCell className={classes.tableHead}>Environment</TableCell>
            <TableCell className={classes.tableHead}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {configs.map(config => (
            <TableRow
              key={config.profile}
              onClick={() => onClick(config.profile)}
            >
              <TableCell component="th" scope="row">
                {config.profile}
              </TableCell>
              <TableCell>{config.tms}</TableCell>
              <TableCell>{config.environment}</TableCell>
              <TableCell >
                <Chip
                  clickable
                  label={config.status ? 'active' : 'inactive'}
                  className={classes.chip}
                  onClick={() => onToggle(config.profile)}
                  color={config.status ? 'secondary' : 'primary'}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
