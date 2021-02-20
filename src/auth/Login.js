import { useState, useEffect } from "react";
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
import logo from "../assets/images/logo.svg";
import { styles } from "./lolgin.styles.module";

function Login({ classes, history }) {
  const [values, setValues] = useState({
    email: "",
    password: "",
    inputBorder: null,
    showPassword: false
  });

  const [show, setShow] = useState(null);
  const [onhoverPassword, setOnhoverPassword] = useState(null);
  const [showInputBorder, setShowInputBorder] = useState(null);
  const [userNumbers, setUserNumbers] = useState(0);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const userData = {
      email: values.email,
      password: values.password
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
      setPasswordError(error.response.data.errors[0].password);
      setEmailError(error.response.data.errors[0].email);
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const users = await axios.get("http://localhost:9090/users");
      setUserNumbers(users.data.length);
    };

    fetchUser();
  }, []);

  return (
    <div className={classes.register}>
      <div className={classes.main__register_contianer}>
        <div className={classes.register__container}>
          <div className={classes.formHeader}>
            <img className={classes.logo} src={logo} alt="logo" />
            {/* <Typography className={classes.title} variant="body2">
              Discord
            </Typography> */}
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
                onMouseEnter={() => setShowInputBorder(true)}
                onMouseLeave={() => setShowInputBorder(false)}
                className={
                  !showInputBorder
                    ? classes.inputField
                    : classes.inputFieldWithBorder
                }
                type="email"
                value={values.email}
                onChange={handleChange("email")}
                error={emailError ? true : false}
              />
              <Typography className={classes.error} variant="caption">
                {emailError && emailError}
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
                onMouseEnter={() => setOnhoverPassword(true)}
                onMouseLeave={() => setOnhoverPassword(false)}
                className={
                  !onhoverPassword
                    ? classes.inputField
                    : classes.inputFieldWithBorder
                }
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
                error={passwordError ? true : false}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      edge="end"
                    >
                      {values.showPassword && values.password ? (
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
                {passwordError && passwordError}
              </Typography>
            </FormControl>

            <Link
              className={!show ? classes.link : classes.link_2}
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
              onMouseEnter={() => setShow(true)}
              onMouseLeave={() => setShow(false)}
              className={!show ? classes.link : classes.link_2}
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
        <div className={classes.layout}>
          <div className={classes.formHeader}>
            <Typography className={classes.title} variant="body2">
              Welcome back
            </Typography>
            <Typography className={classes.subtitle} variant="caption">
              Join the Isbat Developers Community of over &nbsp;
              <Typography className={classes.usernumber} variant="caption">
                {userNumbers && userNumbers}+
              </Typography>
              &nbsp; developers who are willing to share their knowledge
              <span className={classes.dot}>.</span>
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(Login);
