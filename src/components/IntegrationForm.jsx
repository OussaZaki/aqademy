import React from 'react';
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
  Typography
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dialogtitle: {
    fontSize: 40,
    alignText: 'center'
  },
  dialogtext: {
    fontSize: 15,
    color: 'gray',
    padding: '10px 0 10px'
  }
}));

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
      <FormControl>
        <InputLabel htmlFor="env-native-simple">Choose Enviroment</InputLabel>
        <Select
          native
          value={environment}
          onChange={setConfig('environment')}
          inputProps={{
            name: 'env',
            id: 'env-native-simple'
          }}
        >
          <option value="" />
          <option value="EN_US">EN_US</option>
          <option value="SE_KR">SE_KR</option>
          <option value="MA_DH">MA_DH</option>
        </Select>
      </FormControl>
    </React.Fragment>
  );
}
