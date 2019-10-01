import React from 'react';
import Button from '@material-ui/core/Button';

export class ProductForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: ''
    };

  }

  onNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  submitForm(e) {
    e.preventDefault();
    if (!this.state.name) {
      alert('Please enter the name product');
    }

    console.log(this.state.name);
  }

  render() {
    return (
      <form className="form-config">
        <h3>Enter a new product</h3>
        <label>
          Name
          <input type="text" name="name" onChange={this.nameChange} />
        </label>
        <label>
          {' '}
          Address
          <input type="text" />
        </label>
        <label>
          {' '}
          PostCode
          <input type="number" />
        </label>
        <label>
          {' '}
          In stock?
          <input type="checkbox" />
        </label>
        <input type="submit" value="submit" onClick={this.submitForm} />
        <Button value="SUBMIT" />
      </form>
    );
  }
}
