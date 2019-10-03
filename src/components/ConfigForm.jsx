import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfigForm({ open, closeCallback, submit }) {
  // The idea is to save the config in the ConfigForm state.
  // then just passe it up to the parent container Configurations through the callback submit (line 45)
  const [config, setConfig] = React.useState({
    profile: '',
    environment: undefined,
    tms: undefined,
    identifier: '',
    key: ''
  });

  // TODO: add handlers to update the config in the state using setConfig() while validating the steps.
  return (
    <Dialog
      open={open}
      onClose={closeCallback}
      aria-labelledby="config-form-dialog-title"
    >
      <DialogTitle id="config-form-form-dialog-title">Add new config</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add a new config you need your TMS identifier and key.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Config name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={closeCallback} color="primary">
          Cancel
        </Button>
        <Button onClick={() => submit(config)} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}
