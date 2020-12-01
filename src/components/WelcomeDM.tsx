import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

type ownProps = {
  isJapan: boolean;
};

type Props = ownProps;

const WelcomeDM: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!props.isJapan) {
    return (
      <div>
        <Button onClick={handleOpen} color="primary">
          ISSにメッセージを送ってみよう
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>メッセージを送る</DialogTitle>
          <DialogContent>
            <TextField />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
            <Button onClick={handleClose} color="primary">
              送る
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default WelcomeDM;
