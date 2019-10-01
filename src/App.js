import React from 'react';
import Button from '@material-ui/core/Button';
import Table from './Table';

import './App.css';
import { ProductForm } from './Form';

class App extends React.Component {
  state = {
    hide: true
  };

  toggleAdd = e => {
    this.setState({
      hide: !this.state.hide
    });
  };

  render() {
    return (
      <div className="App">
        <h2>Configuration Manager</h2>
        <h4>Add and manage all your integration configs.</h4>
        <Table />
        <div className="ButtonContainer">
          <Button variant="contained" color="primary" onClick={this.toggleAdd}>
            Add config
          </Button>
          {!this.state.hide && <p>Add a new config.</p>}
        </div>
        <ProductForm />
      </div>
    );
  }
}

export default App;
