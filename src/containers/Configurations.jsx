import React from 'react';
import Button from '@material-ui/core/Button';
import Table from '../components/ConfigTable';

function createData(integration, tms, environment, status) {
  return { integration, tms, environment, status };
}

const configs = [
  createData('Postnord_test', 'postnord', 'EU_TEST', true),
  createData('posti_tmp', 'ghostship', 'TMP_PT', false),
  createData('unifaun1', 'unifaun', 'US_TEST', false)
];

class Configurations extends React.Component {
  state = {};

  toggleAdd = e => {
    console.log('show form here');
  };

  render() {
    return (
      <div className="configurations-container">
        <div className="HeaderContainer">
          <h2>Configuration Manager</h2>
          <h4>Add and manage all your integration configs.</h4>
        </div>
        <Table configs={configs} />
        <div className="ButtonContainer">
          <Button variant="contained" color="primary" onClick={this.toggleAdd}>
            Add config
          </Button>
        </div>
        <ProductForm />
      </div>
    );
  }
}

export default Configurations;
