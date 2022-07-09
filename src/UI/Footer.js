import classes from "./Footer.module.css";
import Icon from "./Icon";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <Icon link="https://github.com/somshubro/medtrackerv2" icon="fa-brands fa-github" />
      <Icon
        link="https://www.linkedin.com/in/somshubro-chatterjee/"
        icon="fa-brands fa-linkedin"
      />
      <Icon link="mailto:somshubro20@gmail.com" icon="fa-solid fa-envelope"/>
    </footer>
  );
};

export default Footer;
