import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import ThumbsUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import TickIcon from "@material-ui/icons/Check";
import BagdeIcon from "@material-ui/core/Badge";

import profile_pic from "../../images/black.jpg";

import makeStyles from "@material-ui/core/styles/makeStyles";
import { colors } from "../constants/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: ".8rem",
    color: colors.darkcyin,
    textTransform: "capitalize"
  },
  post: {
    display: "flex",
    maxWidth: "100%",
    padding: "0.5rem",
    borderRadius: "15px"
  },
  post_reply: {
    display: "flex",
    margin: "-0.9rem 0 -1rem 4rem"
  },
  timestamp: {
    fontSize: 12,
    margin: "0 1rem",
    color: colors.lightgray
  },
  bestanswer: {
    display: "flex",
    alignItems: "center",
    color: colors.lightgreen
  },
  reply_body: {
    color: colors.textColor
  }
});

function Reply() {
  const classes = useStyles();

  return (
    <div className={[classes.post]}>
      <div className={classes.post_reply}>
        <div className="post__profile--pic-reply">
          <img src={profile_pic} alt="" />
        </div>
        <div className="post__content">
          <div className="post__user-reply">
            <div className="post__user-reply-name">
              <h4>DiegoVallejo</h4>
              <div className={classes.bestanswer}>
                <TickIcon />
                <span>best answer</span>
                <span className={classes.timestamp}>Yesterday at 3:27 PM</span>
              </div>
            </div>
          </div>
          <p className={classes.reply_body}>
            p5js Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            iusto tempore beatae blanditiis voluptatibus voluptates fuga,
            molestiae, harum maxime provident fugiat facere.
          </p>

          <div className="post_actions-reply">
            <IconButton>
              <BagdeIcon>
                <ThumbsUpOutlinedIcon className="button" />
              </BagdeIcon>
            </IconButton>
            <IconButton>
              <ThumbDownOutlinedIcon className="button-unlike" />
            </IconButton>
            <Button className={classes.btn} variant="text">
              <Typography variant="caption">
                See all answers {"(129)"}
              </Typography>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reply;
