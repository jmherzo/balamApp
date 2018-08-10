import * as React from 'react';

//Components
import LogIn from '../components/LogIn';

// Materal UI
import { MuiThemeProvider, withStyles, createMuiTheme, createStyles, WithStyles } from '@material-ui/core/styles';
import indigo from '@material-ui/core/colors/indigo';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo["800"]
    },
    secondary: pink,
    error: red,

  },
  typography: {
    title: {
      fontSize: 30,
      fontWeight: 400
    }
  }
});

const styles = createStyles({
  '@global': {
    body: {
      backgroundColor: indigo["800"]
    }
  }
});


type AppProps = WithStyles<typeof styles>;

class App extends React.Component<AppProps> {
  public render() {
    return (
      <MuiThemeProvider theme={theme}>
        <LogIn />
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
