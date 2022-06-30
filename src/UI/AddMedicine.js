import { useState } from "react";
import classes from "./AddMedicine.module.css";
import Button from "./Button";

const AddMedicine = (props) => {
  const [medicine, setMedicine] = useState("");
  const [time, setTime] = useState("");

  const addHandler = (event) => {
    event.preventDefault();
    props.onAdd(medicine, time);
    setMedicine("");
    setTime("");
  };

  const medicineChangeHandler = (event) => {
    setMedicine(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const homePage = () => {
    const home = "home";
    props.onHomePage(home);
  };

  return (
    <div className={classes.add}>
    <h4 className="card-title">{props.title}</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
            {props.medicineName}
          </label>
          <input
            type="text"
            onChange={medicineChangeHandler}
            value={medicine}
            className="form-control"
          ></input>
          <div className={classes.time}>
            <label htmlFor="exampleFormControlTextarea1">
              {props.medicineTime}
            </label>
            <div>
              <input
                onChange={timeChangeHandler}
                className="form-control"
                type="time"
                value={time}
              ></input>
            </div>
          </div>
          <Button
            onClick={addHandler}
            className="btn btn-primary"
            content="Add"
          />
        </div>
      </form>
      <Button onClick={homePage} className="btn btn-primary" content="Back to Home" />
    </div>
  );
};

export default AddMedicine;
