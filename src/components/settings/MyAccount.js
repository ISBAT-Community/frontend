import { useState } from "react";
//MUI Stuff
// import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import withStyles from "@material-ui/core/styles/withStyles";
//Icons
import EditIcon from "@material-ui/icons/Edit";
import UpdateIcon from "@material-ui/icons/Update";

import axios from "axios";
import profileImg from "../../images/emoji.jpg";
import { styles } from "./styles.module.js";

function MyAccount({ classes }) {
  const [editUsername, setEditUsername] = useState(true);
  const [editEmail, setEditEmail] = useState(true);
  const [editBio, setEditBio] = useState(true);

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");

  // const [preEmail, setPreEmail] = useState("");
  // const [preUsername, setPreUsername] = useState("");
  // const [preBio, setPreBio] = useState("");

  const toggleEdit = field => {
    switch (field) {
      case "username":
        return setEditUsername(!editUsername);
      case "email":
        return setEditEmail(!editEmail);
      case "bio":
        return setEditBio(!editBio);
      default:
        setEditBio(false);
        setEditEmail(false);
        setEditUsername(false);
    }
  };

  const handleEmail = event => {
    setEmail(event.target.value);
  };

  const handleUsername = event => {
    setUsername(event.target.value);
  };

  const handleBio = event => {
    setBio(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const userData = {
      username,
      email,
      bio
    };

    try {
      const response = await axios.post("http://localhost:9090/user", userData);
      if (response) {
        console.log(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   (async function fetchData() {
  //     const userData = await axios.get("http://localhost:9090/user");
  //     if (userData.data) {
  //       setPreBio(userData.data.bio);
  //       setPreEmail(userData.data.email);
  //       setPreUsername(userData.data.username);
  //     }
  //   })();
  // }, []);

  return (
    <div className={classes.myAccount}>
      <Typography variant="body2" className={classes.myAccount_title}>
        My Account
      </Typography>

      <div className={classes.myAccount_content}>
        <div className={classes.profilePic}>
          <img
            src={profileImg}
            alt="profile"
            className={classes.profilePic_img}
          />
        </div>
        <div className={classes.userInfo}>
          {/* <Typography className={classes.userInfo_details}>
            User Info
          </Typography> */}
          <form action="/settings" method="POST">
            <div className={classes.textInputContainer}>
              <label className={classes.label}>Username</label>
              <div className={classes.textInput}>
                <input
                  type="text"
                  name="username"
                  placeholder="charlesElloit"
                  className={
                    editUsername ? classes.inputDisabled : classes.input
                  }
                  // value={preUsername ? preUsername : ""}
                  disabled={editUsername}
                  onChange={_event => handleUsername(_event)}
                />
                <IconButton
                  className={classes.editBtn}
                  onClick={() => toggleEdit("username")}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>
            <div className={classes.textInputContainer}>
              <label className={classes.label}>Email</label>
              <div className={classes.textInput}>
                <input
                  type="email"
                  name="email"
                  placeholder="*********@gmail.com"
                  className={editEmail ? classes.inputDisabled : classes.input}
                  disabled={editEmail}
                  // value={preEmail ? preEmail : ""}
                  onChange={_event => handleEmail(_event)}
                />
                <IconButton
                  className={classes.editBtn}
                  onClick={() => toggleEdit("email")}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>

            <div className={classes.textInputContainer}>
              <label className={classes.label}>Bio</label>
              <div className={classes.textInput}>
                <input
                  type="text"
                  name="bio"
                  placeholder="Tell us about you self"
                  className={editBio ? classes.inputDisabled : classes.input}
                  disabled={editBio}
                  // value={preBio ? preBio : ""}
                  onChange={_event => handleBio(_event)}
                />
                <IconButton
                  className={classes.editBtn}
                  onClick={() => toggleEdit("bio")}
                >
                  <EditIcon />
                </IconButton>
              </div>
            </div>

            <Button
              className={classes.button}
              type="submit"
              onClick={event => handleSubmit(event)}
            >
              <UpdateIcon className={classes.icon} fontSize="small" />
              Update
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withStyles(styles)(MyAccount);
