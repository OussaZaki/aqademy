import React from 'react';
import Button from '@material-ui/core/Button';
import Table from './Table';

import { ProductForm } from './Form';

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
        <Table />
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
