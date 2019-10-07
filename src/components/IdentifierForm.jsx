import React from 'react';
import {
  Grid,
  TextField,
  MenuItem,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dialogtitle: {
    fontSize: 36,
    letterSpacing: -0.2,
    fontWeight: 700,
    textAlign: 'left'
  },
  dialogtext: {
    fontSize: 19,
    fontWeight: 400,
    textAlign: 'left'
  },
  textField: {
    marginTop: 20
  },
  menu: {
    width: 200
  }
}));

const tmsList = [
  {
    value: 'unifaun',
    label: 'Unifaun'
  },
  {
    value: 'ship_walet',
    label: 'Ship wallet'
  },
  {
    value: 'logistics_delux',
    label: 'Logistics delux'
  }
];

export default function IdentifierForm({ tms, setConfig }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={classes.dialogtitle}
        id="config-form-form-dialog-title"
      >
        Enter TMS Credentials
      </Typography>
      <Typography
        className={classes.dialogtext}
        id="config-form-form-dialog-title"
      >
        Choose your TMS and enter your login Credentials
      </Typography>
      <TextField
        id="tms"
        select
        label="TMS"
        className={classes.textField}
        value={tms}
        onChange={setConfig('tms')}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please choose a tms"
        margin="normal"
        fullWidth
      >
        {tmsList.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Grid container spacing={3} >
        <Grid item xs={6}>
          <TextField
            required
            id="identifier"
            label="Identifier"
            className={classes.textField}
            onChange={setConfig('identifier')}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="key"
            label="Key"
            type="password"
            className={classes.textField}
            onChange={setConfig('key')}
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
