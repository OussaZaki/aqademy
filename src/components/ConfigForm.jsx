import React from 'react';
import {
  makeStyles,
  Button,
  Dialog,
  DialogContent,
  DialogActions
} from '@material-ui/core';
import IntegrationForm from './IntegrationForm';
import IdentifierForm from './IdentifierForm';

const useStyles = makeStyles(theme => ({
  dialogcontent: {
    overflow: 'hidden',
    padding: '75px 50px 50px',
    display: 'block',
    height: 280,
    width: 420
  }
}));

const steps = ['Integration', 'Identifier and Key'];

function getStepContent(step, config, setConfigCallback) {
  switch (step) {
    case 0:
      return <IntegrationForm setConfig={setConfigCallback} tms={config.tms} />;
    case 1:
      return (
        <IdentifierForm
          setConfig={setConfigCallback}
          environment={config.environment}
        />
      );
    default:
      throw new Error('Unknown step');
  }
}

export default function ConfigForm({ open, closeCallback, submit }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [config, setConfig] = React.useState({
    profile: '',
    environment: undefined,
    tms: undefined,
    identifier: '',
    key: ''
  });

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = () => {
    // config.profile === '' ? alert('profile name cant be empty!') : 
    submit(config);
    closeCallback();
  };

  const setConfigCallback = name => event => {
    setConfig({
      ...config,
      [name]: event.target.value
    });
  };

  return (
    <Dialog
      open={open}
      onClose={closeCallback}
      aria-labelledby="config-form-dialog-title"
      className={classes.dialog}
    >
      <DialogContent className={classes.dialogcontent}>
        {getStepContent(activeStep, config, setConfigCallback)}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeCallback}>
          Cancel
        </Button>
        {activeStep !== 0 && (
          <Button onClick={handleBack}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
        >
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
