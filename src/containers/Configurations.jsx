import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '../components/ConfigTable';
import ConfigForm from '../components/ConfigForm';

function createData(integration, tms, environment, status) {
  return { integration, tms, environment, status };
}

const configs = [
  createData('Postnord_test', 'postnord', 'EU_TEST', true),
  createData('posti_tmp', 'ghostship', 'TMP_PT', false),
  createData('unifaun1', 'unifaun', 'US_TEST', false)
];

export default function Configurations() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="configurations-container">
      <div className="HeaderContainer">
        <h2>Configuration Manager</h2>
        <h4>Add and manage all your integration configs.</h4>
      </div>
      <Table configs={configs} />
      <div className="ButtonContainer">
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Add config
        </Button>
      </div>
      <ConfigForm
        open={open}
        closeCallback={handleClose}
        aria-labelledby="form-dialog-title"
      />
    </div>
  );
}
