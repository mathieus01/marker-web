import { ConnectedRouter } from "connected-react-router";
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./config/reactotron";
import Routes from "./routes";
import history from "./routes/history";
import store from "./store";
import GlobalStyle from "./styles/global";
import "moment/locale/pt-br";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#42a5f5"
    },
    secondary: {
      main: "#cb3441"
    }
  }
});
function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ToastContainer className="toast-container" autoClose={5000} />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
