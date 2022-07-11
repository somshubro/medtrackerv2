import React from "react";
import Button from "./Button";
import classes from "./Modal.module.css";
import Wrapper from "./Wrapper";

const Backdrop = (props) => {
  return <div onClick={props.onConfirm} className={classes.backdrop}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Wrapper className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirm} content="Okay" className="btn btn-primary"/>
      </footer>
    </Wrapper>
  );
};

const Modal = (props) => {

  return (
    <React.Fragment>
      <Backdrop onConfirm={props.onConfirm} />
      <ModalOverlay
        title={props.title}
        message={props.message}
        onConfirm={props.onConfirm}
      />
    </React.Fragment>
  );
};

export default Modal;
