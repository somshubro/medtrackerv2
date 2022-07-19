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
        <p className={classes.content}>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button
          onClick={props.onConfirm}
          content={props.button}
          className="btn btn-primary"
        />
        {props.additionalButton && (
          <Button
            onClick={props.onDelete}
            content={props.additionalButton}
            className="btn btn-danger"
          />
        )}
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
        onDelete={props.onDelete}
        button={props.button}
        additionalButton={props.additionalButton}
      />
    </React.Fragment>
  );
};

export default Modal;
