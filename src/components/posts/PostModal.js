function PostModal() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState("paper");
  const descriptionElementRef = useRef(null);

  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen("paper")}>{"<>"} </Button>
      <div>
        <Dialog
          open={open}
          className={classes.dialog}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">
            <div className={classes.dialog__header}>
              <Typography variant="body2">Subscribe</Typography>
              <div className={classes.cancel}>
                <CloseIcon onClick={handleClose} />
              </div>
            </div>
          </DialogTitle>
          <DialogContent
            dividers={scroll === "paper"}
            className={classes.dialog_content}
          >
            <div className={classes.dialog_content_left}></div>
            <div className={classes.dialog_content_right}></div>
          </DialogContent>
          <DialogActions>
            <div className={classes.dialog_actions}>
              <div className={classes.dialog_action_left}></div>
              <div className={classes.dialog_action_right}>
                <form>
                  <input type="text" placeholder="care to leave a reply" />
                </form>
              </div>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
