import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import makeStyles from "@material-ui/core/styles/makeStyles";
import axios from "axios";

import { colors, font } from "../components/constants/colors.js";

const useStyles = makeStyles({
  login: {
    width: "100%",
    display: "flex",
    height: "80vh",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center"
  },
  login_container: {
    width: "30%",
    textAlign: "center",
    background: colors.dark_background_color
  },
  login_content: {
    width: "80%",
    margin: "1rem auto"
  },
  login_title: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    color: colors.white,
    fontFamily: font.fontFamily
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  input: {
    background: "none",
    padding: 10,
    border: "none",
    fontFamily: font.fontFamily,
    color: colors.textColor,
    borderBottom: `1px solid ${colors.borderColor}`
  },
  login_action: {
    marginTop: "1.5rem"
  },
  button: {
    width: "30%",
    marginTop: "1rem",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: font.fontFamily,
    color: colors.white,
    border: `1px solid ${colors.borderColor}`
  }
});

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errors, setErrors] = useState("");

  const handleEmail = value => {
    setEmail(value);
  };

  const handlePassword = value => {
    setPassword(value);
  };

  const handleSubmit = async () => {
    const userData = {
      email,
      password
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
        props.history.push("/");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.login}>
      <div className={classes.login_container}>
        <div className={classes.login_content}>
          <Typography className={classes.login_title} variant="body1">
            Welcome Back
          </Typography>
          <form className={classes.form} action="/login" method="POST">
            <input
              type="email"
              name="email"
              className={classes.input}
              id="standard"
              placeholder="Email"
              autoFocus
              onChange={e => handleEmail(e.target.value)}
            />
            <input
              className={classes.input}
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              onChange={e => handlePassword(e.target.value)}
            />
          </form>
          <div className={classes.login_action}>
            <Link to="/" className="link">
              Forget Password
            </Link>
            <div className="button">
              <Button
                className={classes.button}
                type="submit"
                onClick={handleSubmit}
              >
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
