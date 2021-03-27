import * as React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Button, Link } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import logo from "./logo.svg";
import { styles } from "./lolgin.styles.module";
import PropTypes from "prop-types";

function Login({ classes, history }) {
  const [state, setState] = React.useState({
    email: "",
    show: null,
    password: "",
    emailError: "",
    inputBorder: null,
    passwordError: "",
    showPassword: false,
    showInputBorder: null,
    onhoverPassword: null
  });

  // const [userNumbers, setUserNumbers] = useState(0);
  // const [passwordError, setPasswordError] = useState("");

  const handleChange = prop => event => {
    setState({ ...state, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = {
      email: state.email,
      password: state.password
    };

    try {
      const response = await axios.post(
        "http://localhost:9090/signin",
        userData
      );

      if (response) {
        const AuthToken = `Bearer ${response.data.token}`;
        localStorage.setItem("AuthToken", AuthToken);
        axios.defaults.headers.common["Authorization"] = AuthToken;
        history.push("/");
      }
    } catch (error) {
      setState({ ...state, emailError: error.response.data.errors[0].email });
      setState({
        ...state,
        passwordError: error.response.data.errors[0].password
      });
    }
  };

  return (
    <div className={classes.register}>
      <div className={classes.main__register_contianer}>
        <div className={classes.register__container}>
          <div className={classes.formHeader}>
            <img className={classes.logo} src={logo} alt="logo" />
            <Typography className={classes.policy} variant="body2">
              Welcome Back to the Community
            </Typography>
          </div>
          <form className={classes.form} action="/login" method="POST">
            <FormControl variant="outlined">
              <InputLabel
                className={classes.label}
                htmlFor="outlined-adornment-email"
              >
                E-mail
              </InputLabel>
              <OutlinedInput
                onMouseEnter={() =>
                  setState({ ...state, showInputBorder: true })
                }
                onMouseLeave={() =>
                  setState({ ...state, showInputBorder: false })
                }
                className={
                  !state.howInputBorder
                    ? classes.inputField
                    : classes.inputFieldWithBorder
                }
                type="email"
                value={state.email}
                onChange={handleChange("email")}
                error={state.emailError ? true : false}
              />
              <Typography className={classes.error} variant="caption">
                {state.emailError && state.emailError}
              </Typography>
            </FormControl>

            {/* Password */}
            <FormControl variant="outlined">
              <InputLabel
                className={classes.label}
                htmlFor="outlined-adornment-password"
              >
                Password
              </InputLabel>
              <OutlinedInput
                onMouseEnter={() =>
                  setState({ ...state, onhoverPassword: true })
                }
                onMouseLeave={() =>
                  setState({ ...state, onhoverPassword: false })
                }
                className={
                  !state.onhoverPassword
                    ? classes.inputField
                    : classes.inputFieldWithBorder
                }
                id="outlined-adornment-password"
                type={state.showPassword ? "text" : "password"}
                value={state.password}
                onChange={handleChange("password")}
                error={state.passwordError ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {state.showPassword && state.password ? (
                        <Visibility />
                      ) : (
                        <VisibilityOff />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
              <Typography className={classes.error} variant="caption">
                {state.passwordError && state.passwordError}
              </Typography>
            </FormControl>

            <Link
              className={!state.show ? classes.link : classes.link_2}
              to="/forgotten-password"
            >
              forgot password
            </Link>

            <Button
              color="primary"
              onClick={e => handleSubmit(e)}
              className={classes.button}
              type="submit"
            >
              Sign in
            </Button>
            <a
              onMouseEnter={() => setState({ ...state, show: true })}
              onMouseLeave={() => setState({ ...state, show: false })}
              className={!state.show ? classes.link : classes.link_2}
              href="/signup"
            >
              New here?, Welcome just click here
            </a>

            <Typography variant="caption" className={classes.policy}>
              By registing, we assume you have agree to our{" "}
              <u className={classes.underlines}>terms</u> and
              <u className={classes.underlines}> Policies</u>
            </Typography>
          </form>
        </div>
      </div>
    </div>
  );
}

Login.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object
};

export default withStyles(styles)(Login);
