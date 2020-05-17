import React, { useEffect } from "react";
import { Modal, Backdrop, Fade, makeStyles } from "@material-ui/core";
// import { Container } from './styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: 300,
    flexGrow: 1,
    minWidth: 300,
    transform: "translateZ(0)",
    "@media all and (-ms-high-contrast: none)": {
      display: "none"
    }
  },
  modal: {
    display: "flex",
    padding: theme.spacing(1),
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));
export default function ModalComp(props) {
  const classes = useStyles();

  useEffect(() => {}, []);

  const cancelar = () => {
    props.onClose();
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.openModal}
      onClose={cancelar}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <Fade in={props.openModal}>{props.children}</Fade>
    </Modal>
  );
}
