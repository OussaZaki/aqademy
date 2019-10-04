import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
  withStyles,
  Typography
} from "@material-ui/core";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "black"
      }
    }
  }
})(TextField);

const useStyles = makeStyles(theme => ({
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  dialogtitle: {
    fontSize: 40,
    alignText: "center"
  },
  dialogtext: {
    fontSize: 15,
    color: "gray",
    padding: "10px 0 10px"
  },
  root: {
    width: "100%",
    "& label.Mui-focused": {
      color: "black"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "black"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black"
      },
      "&:hover fieldset": {
        borderColor: "black"
      },
      "&.Mui-focused fieldset": {
        borderColor: "black"
      }
    }
  }
}));

export default function IntegrationForm() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    env: "",
    name: "hai"
  });

  const handleChangeAgain = name => event => {
    setState({
      ...state,
      [name]: event.target.value
    });
  };

  return (
    <React.Fragment>
      <Typography
        className={classes.dialogtitle}
        id="config-form-form-dialog-title"
      >
        Add new profile
      </Typography>
      <Typography
        className={classes.dialogtext}
        id="config-form-form-dialog-title"
      >
        Name your Profile and choose an Enviroment
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CssTextField
            required
            id="integration"
            name="integration"
            label="Integration Name"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.root}>
            <InputLabel htmlFor="env-native-simple">
              Choose Enviroment
            </InputLabel>
            <Select
              native
              value={state.env}
              onChange={handleChangeAgain("env")}
              inputProps={{
                name: "env",
                id: "env-native-simple"
              }}
            >
              <option value="" />
              <option value="EN_US">EN_US</option>
              <option value="SE_KR">SE_KR</option>
              <option value="MA_DH">MA_DH</option>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}