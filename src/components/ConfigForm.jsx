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
  dialog: {
    '& .MuiDialog-paperWidthSm': {
      width: 500
    }
  },
  dialogcontent: {
    overflow: 'hidden',
    padding: '30px 30px 50px',
    display: 'block',
    height: '200px'
  },
  dialogtitle: {
    fontSize: 40,
    padding: 20,
    justifyContent: 'center'
  },
  dialogbutton: {
    width: 80,
    height: 50,
    background: 'black',
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    '& .MuiButton-contained:hover': {
      backgroundColor: 'green'
    }
  },
  dialogbutton2: {
    width: 80,
    height: 50,
    fontWeight: 'bold'
  }
}));

const steps = ['Integration', 'Identifier and Key'];

function getStepContent(step, setConfigCallback) {
  switch (step) {
    case 0:
      return <IntegrationForm setConfig={setConfigCallback} />;
    case 1:
      return <IdentifierForm setConfig={setConfigCallback} />;
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
    submit(config);
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
        {getStepContent(activeStep, setConfigCallback)}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeCallback} className={classes.dialogbutton2}>
          Cancel
        </Button>
        {activeStep !== 0 && (
          <Button onClick={handleBack} className={classes.dialogbutton2}>
            Back
          </Button>
        )}
        <Button
          variant="contained"
          className={classes.dialogbutton}
          onClick={activeStep === steps.length - 1 ? handleSubmit : handleNext}
        >
          {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
