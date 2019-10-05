import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Table from '../components/ConfigTable';
import ConfigForm from '../components/ConfigForm';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 40,
    [theme.breakpoints.up('sm')]: {
      marginLeft: 180,
      marginRight: 180
    },
    [theme.breakpoints.between('xs', 'sm')]: {
      marginLeft: 80,
      marginRight: 80
    },
    [theme.breakpoints.down('xs')]: {
      marginLeft: 10,
      marginRight: 10
    }
  },
  header: {
    paddingTop: 32,
    paddingBottom: 16
  },
  paragraph: {
    lineHeight: 1.5,
    fontSize: 18,
    color: '#121212'
  },
  buttonContainer: {
    textAlign: 'right',
    width: '100%',
    padding: '32px 0'
  }
}));

function createData(profile, tms, environment, status) {
  return { profile, tms, environment, status };
}

const _configs = [
  createData('Postnord_test', 'postnord', 'EU_TEST', true),
  createData('posti_tmp', 'ghostship', 'TMP_PT', false),
  createData('unifaun1', 'unifaun', 'US_TEST', false)
];

function toggleConfig(_configs, profile) {
  return _configs.map(config => {
    if (config.profile === profile) {
      config.status = true;
    } else {
      config.status = false;
    }

    return config;
  });
}

export default function Configurations() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [configs, setConfigs] = React.useState(_configs);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleActiveToggle = profile => {
    const newConfigs = toggleConfig(configs, profile);
    setConfigs(newConfigs);
  };

  const handleSubmit = config => {
    const newConfigs = [...configs, config];
    setConfigs(newConfigs);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h1>Configuration Manager</h1>
        <p className={classes.paragraph}>
          Add and manage all your logistics configurations.
          <br /> Make sure you are integrated with a Transport Management System
          and have the right identifier and key.
        </p>
      </div>
      <Table
        configs={configs}
        onToggle={handleActiveToggle}
        onClick={profile => console.log(`Open ${profile} config page`)}
      />
      <div className={classes.buttonContainer}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add config
        </Button>
      </div>
      <ConfigForm
        open={open}
        submit={handleSubmit}
        closeCallback={handleClose}
        aria-labelledby="form-dialog-title"
      />
    </div>
  );
}
