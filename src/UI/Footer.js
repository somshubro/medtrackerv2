import classes from "./Footer.module.css";

const Footer = (props) => {
  return <div className={classes.footer}>
      <p>{props.content}</p>
  </div>;
};

export default Footer;
