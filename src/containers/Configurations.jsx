import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '../components/ConfigTable';
import ConfigForm from '../components/ConfigForm';

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
    const newConfigs = configs.push(config);
    setConfigs(newConfigs);
  };

  return (
    <div className="configurations-container">
      <div className="HeaderContainer">
        <h2>Configuration Manager</h2>
        <h4>Add and manage all your configs.</h4>
      </div>
      <Table
        configs={configs}
        onToggle={handleActiveToggle}
        onClick={profile => console.log(`Open ${profile} config page`)}
      />
      <div className="ButtonContainer">
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
