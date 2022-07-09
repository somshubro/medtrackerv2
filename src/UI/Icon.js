import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Icon.module.css";

const Icon = (props) => {
  return (
    <a className={classes.icon} href={props.link}>
      <FontAwesomeIcon icon={props.icon} />
    </a>
  );
};

export default Icon;
