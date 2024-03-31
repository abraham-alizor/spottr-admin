import { IconButton } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import { MdClose, MdKeyboardBackspace } from "react-icons/md";

interface ModalProps {
  children: JSX.Element;
  close: any;
  open: any;
  maxWidth?: any;
  back?: () => void;
  tab?: any;
}

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) => <Slide direction='up' ref={ref} {...props} />,
);
function Modal(props: ModalProps) {
  return (
    <Dialog
      aria-describedby='alert-dialog-slide-description'
      disableEscapeKeyDown
      fullWidth
      maxWidth={props.maxWidth}
      open={props.open}
      TransitionComponent={Transition}
    >
      <DialogActions
        sx={{
          display: "flex",
          justifyContent: props?.tab > 0 ? "space-between" : "flex-end",
          alignItems: "flex-start",
        }}
      >
        {props?.tab > 0 && (
          <IconButton onClick={props.back}>
            <MdKeyboardBackspace />
          </IconButton>
        )}

        <IconButton onClick={props.close}>
          <MdClose />
        </IconButton>
      </DialogActions>
      {props.children}
    </Dialog>
  );
}

export default Modal;
