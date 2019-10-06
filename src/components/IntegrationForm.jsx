import React from 'react';
import { TextField, MenuItem, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  dialogtitle: {
    fontSize: 40,
    alignText: 'center'
  },
  dialogtext: {
    fontSize: 15,
    color: 'gray',
    padding: '10px 0 10px'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  },
  menu: {
    width: 200
  }
}));

const enviroments = [
  {
    value: 'eu_production',
    label: 'eu_production'
  },
  {
    value: 'eu_staging',
    label: 'eu_staging'
  },
  {
    value: 'us_staging',
    label: 'us_staging'
  }
];

export default function IntegrationForm({ environment, setConfig }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={classes.dialogtitle}
        id="config-form-form-dialog-title"
      >
        Add new profile
      </Typography>
      <Typography
        className={classes.dialogtext}
        id="config-form-form-dialog-title"
      >
        Name your Profile and choose an Enviroment
      </Typography>
      <TextField
        required
        onChange={setConfig('profile')}
        id="profile"
        name="profile"
        label="rofile Name"
        fullWidth
      />
      <TextField
        id="environment"
        select
        label="Choose Environment"
        className={classes.textField}
        value={environment}
        onChange={setConfig('environment')}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        helperText="Please choose an environment"
        margin="normal"
      >
        {enviroments.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </React.Fragment>
  );
}
