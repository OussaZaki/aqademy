import React from 'react';
import Button from '@material-ui/core/Button';

export default function ConfigForm() {
  return (
    <form className="config-form">
      <h3>Enter a new config</h3>
      <label>
        Name
        <input type="text" name="name" />
      </label>
      <input type="submit" value="submit" />
      <Button value="SUBMIT" />
    </form>
  );
}
