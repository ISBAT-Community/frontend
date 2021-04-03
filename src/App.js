import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles/";
import jwtDecode from "jwt-decode";
import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home.js";
// import Settings from "./pages/Settings.js";
import GeneralSettings from "./components/settings/GeneralSettings";
import { ProtectedRoute } from "./utils/protect.route";
import { theme } from "./components/constants/styles.js";
import axios from "axios";
import Register from "./auth/Register";
import Login from "./auth/Login";

const token = localStorage.getItem("AuthToken");
let authenticated;

if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  }
  axios.defaults.headers.common["Authorization"] = token;
  authenticated = true;
}

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Route path="/profile/settings" exact component={GeneralSettings} />
          <Route path="/post/:id" exact component={SinglePost} />
          <ProtectedRoute authenticated={authenticated} component={Home} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
