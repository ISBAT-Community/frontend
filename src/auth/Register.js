import React from "react";
import clsx from "clsx";
import withStyles from "@material-ui/core/styles/withStyles";
import { Typography, Button } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import axios from "axios";
import { styles } from "./registration.styles";

function Register({ classes, history }) {
  const [values, setValues] = React.useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    showConfirmPassword: false
  });

  const [show, setShow] = React.useState(null);
  const [userNumbers, setUserNumbers] = React.useState(0);

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowConfirmPassword = () => {
    setValues({ ...values, showConfirmPassword: !values.showConfirmPassword });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newUser = {
      username: values.username,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword
    };

    await axios.post("http://localhost:9090/signup", newUser);

    history.push("/login");
  };

  React.useEffect(() => {
    const fetchUser = async () => {
      const users = await axios.get("http://localhost:9090/users");
      setUserNumbers(users.data.length);
    };

    fetchUser();
  }, []);

  return (
    <div className={classes.register}>
      <div className={classes.register__container}>
        <div className={classes.formHeader}>
          <Typography className={classes.title} variant="body2">
            Welcome
          </Typography>
          <Typography className={classes.subtitle} variant="caption">
            Join the Isbat Developers Community of over &nbsp;
            <Typography className={classes.usernumber} variant="caption">
              {userNumbers && userNumbers}
            </Typography>
            &nbsp; developers who are willing to share their knowledge
            <span className={classes.dot}>.</span>
          </Typography>
        </div>
        <form className={classes.form} action="/sign" method="POST">
          <FormControl variant="outlined">
            <InputLabel
              className={classes.label}
              htmlFor="outlined-adornment-password"
            >
              Username
            </InputLabel>
            <OutlinedInput
              className={classes.inputField}
              type="text"
              value={values.username}
              onChange={handleChange("username")}
            />
          </FormControl>

          <FormControl variant="outlined">
            <InputLabel
              className={classes.label}
              htmlFor="outlined-adornment-password"
            >
              Email
            </InputLabel>
            <OutlinedInput
              className={classes.inputField}
              type="email"
              value={values.email}
              onChange={handleChange("email")}
            />
          </FormControl>

          {/* Password */}
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel
              className={classes.label}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              className={classes.inputField}
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
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
          </FormControl>

          {/* Confirm Password */}
          <FormControl variant="outlined">
            <InputLabel
              className={classes.label}
              htmlFor="outlined-adornment-password"
            >
              Confirm Password
            </InputLabel>
            <OutlinedInput
              className={classes.inputField}
              id="outlined-adornment-password"
              type={values.showConfirmPassword ? "text" : "password"}
              value={values.confirmPassword}
              onChange={handleChange("confirmPassword")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowConfirmPassword}
                    edge="end"
                  >
                    {values.showConfirmPassword && values.confirmPassword ? (
                      <Visibility />
                    ) : (
                      <VisibilityOff />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>

          <Button
            onClick={e => handleSubmit(e)}
            className={classes.button}
            type="submit"
          >
            Sign Up
          </Button>
          <a
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            className={!show ? classes.link : classes.link_2}
            href="/login"
          >
            Already a member
          </a>

          <Typography variant="caption" className={classes.policy}>
            By registing, we assume you have agree to our{" "}
            <u className={classes.underlines}>terms</u> and
            <u className={classes.underlines}> Policies</u>
          </Typography>
        </form>
      </div>
    </div>
  );
}

export default withStyles(styles)(Register);
