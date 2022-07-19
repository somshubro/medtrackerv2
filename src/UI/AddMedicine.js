import { useState } from "react";
import classes from "./AddMedicine.module.css";
import Button from "./Button";
import Modal from "./Modal";

const AddMedicine = (props) => {
  const [medicine, setMedicine] = useState(props.medicineName);
  const [time, setTime] = useState(props.medicineTime);
  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const addHandler = (event) => {
    event.preventDefault();
    if (medicine.trim().length === 0 && time.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid medicine name and time",
      });
      return;
    }
    if (medicine.trim().length === 0) {
      setError({
        title: "Invalid medicine name",
        message: "Please enter a valid medicine name",
      });
      return;
    }
    if (time.trim().length === 0) {
      setError({ title: "Invalid time", message: "Please enter a valid time" });
      return;
    }
    if (props.mode === "add") {
      props.onAdd(medicineData);
      setMedicine("");
      setTime("");
      setSuccess({
        title: "Successfully added!",
        message:
          "Your medicines have been successfully added. You can view them from reminders.",
      });
    }
    if (props.mode === "edit") {
      props.onEdit(medicine, time, props.medicineId);
      setSuccess({
        title: "Successfully saved!",
        message: "Your medicines have been successfully saved.",
      });
    }
  };

  const errorHandler = () => {
    setError(null);
  };

  const successHandler = () => {
    setSuccess(null);
  };

  const medicineChangeHandler = (event) => {
    setMedicine(event.target.value);
  };

  const timeChangeHandler = (event) => {
    setTime(event.target.value);
  };

  const homePage = () => {
    if (props.button === "Add") {
      const home = "home";
      props.onHomePage(home);
    }
    if (props.button === "Save") {
      const view = "view";
      props.onReminders(view);
    }
  };

  const medicineData = {
    medicineName: medicine,
    medicineTime: time,
    status: "Take",
    statusClass: "btn btn-primary btn-sm",
    id: Math.random().toString(),
  };

  return (
    <div className={classes.add}>
      {error && (
        <Modal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      {success && (
        <Modal
          title={success.title}
          message={success.message}
          onConfirm={successHandler}
        />
      )}
      <h4 className="card-title">{props.title}</h4>
      <form>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">{props.titleName}</label>
          <input
            type="text"
            onChange={medicineChangeHandler}
            value={medicine}
            className="form-control"
          ></input>
          <div className={classes.time}>
            <label htmlFor="exampleFormControlTextarea1">
              {props.titleTime}
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
            content={props.button}
          />
        </div>
      </form>
      <Button
        onClick={homePage}
        className="btn btn-primary"
        content={props.back}
      />
    </div>
  );
};

export default AddMedicine;
