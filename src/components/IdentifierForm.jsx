import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  makeStyles,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
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
  },
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
  }
}));

export default function IdentifierForm({ tms, setConfig }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography
        className={classes.dialogtitle}
        id="config-form-form-dialog-title"
      >
        Enter TMS Credentials
      </Typography>
      <Typography
        className={classes.dialogtext}
        id="config-form-form-dialog-title"
      >
        Choose your TMS and enter your login Credentials
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl className={classes.root}>
            <InputLabel htmlFor="tms-native-simple">Choose TMS</InputLabel>
            <Select
              native
              value={tms}
              onChange={setConfig("tms")}
              inputProps={{
                name: "tms",
                id: "tms-native-simple"
              }}
            >
              <option value="" />
              <option value="postnord">postnord</option>
              <option value="dhl">DHL</option>
              <option value="getship">getship</option>
              <option value="ghostship">GhostShip</option>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField required id="identifier" label="Identifier" fullWidth onChange={setConfig("identifier")}/>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="key"
            label="Key"
            type="password"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}