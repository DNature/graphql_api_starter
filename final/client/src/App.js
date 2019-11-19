import React from "react";
import { Router, useHistory } from "react-router-dom";

//? Material UI
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import themefile from "./theme";
import { createBrowserHistory } from "history";

import "./App.css";
import Routes from "./Routes";

const history = createBrowserHistory();
const theme = createMuiTheme(themefile);

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router history={history}>
        <Routes />
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
