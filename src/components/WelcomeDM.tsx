import React from "react";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import { sendDirectMessage } from '../API/main'

type ownProps = {
  isJapan: boolean;
};

type Props = ownProps;

const WelcomeDM: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState('')

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event:any) => {
    setMessage(event.target.value)
  }

  const handleSubmit = () => {
    sendDirectMessage(message)
    handleClose()
  }

  if (!props.isJapan) {
    return (
      <div>
        <Button onClick={handleOpen} color="primary">
          ISSにメッセージを送ってみよう
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>メッセージを送る</DialogTitle>
          <DialogContent>
            <TextField onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              閉じる
            </Button>
            <Button onClick={handleSubmit} color="primary">送信</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  } else {
    return null;
  }
};

export default WelcomeDM;
