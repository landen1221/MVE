import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import "../css/DialogBox.css";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="DialogBox">
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        <u>Website Rules</u>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">Rules:</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Read these rules before posting or flagging:
            <ol>
              <li>
                Stories must be first hand experiences (not something you
                heard/read).
                <br />
                *Unless person has passed away.
              </li>
              <li>
                Post must be about an experience with COVID or a Vaccine (not a
                comment or political statement).
              </li>
              <li>No outside links unless directly related to your story.</li>
              <li>
                Each person is limited to 3 stories (COVID, vaccine-1,
                vaccine-2).
              </li>
              <li>Don't use unneccessary amounts of profanity.</li>
            </ol>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            id="close-button"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
