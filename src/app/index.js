import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

import Configurations from '../containers/Configurations';

const theme = createMuiTheme({
  typography: {
    button: {
      fontSize: '1rem'
    }
  },
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#000000',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#ffd800'
    }
  },
});

class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Configurations />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
