import Button from "./Button";
import classes from "./Card.module.css";

const Card = (props) => {
  const pageNav = () => {
    props.onClickButton(props.title);
  };

  return (
    <div className={classes.card}>
      <div className="card w-75">
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <Button
            onClick={pageNav}
            className="btn btn-primary"
            content={props.title}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
