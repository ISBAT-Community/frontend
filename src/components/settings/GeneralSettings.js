import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  profile__container: {
    width: "100%",
    backgroundColor: "#ededed"
  },
  main_container: {
    width: "70%",
    margin: "0 auto",
    display: "flex",
    height: "100vh",
    backgroundColor: "#fff"
  },
  main_left_profile_side: {
    width: "30%"
  }
});

const GeneralSettings = () => {
  const classes = useStyles();

  return (
    <div className={classes.profile__container}>
      <div className={classes.main_container}>
        <div className={classes.main_left_profile_side}>Account Settings</div>
        <div className={classes.main_right_profile_side}>right</div>
      </div>
    </div>
  );
};

export default GeneralSettings;
