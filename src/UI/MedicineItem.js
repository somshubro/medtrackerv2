import React from "react";
import classes from "./MedicineItem.module.css";

const MedicineItem = (props) => {
  return (
    <React.Fragment>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.medicineName}
        <div className={classes.time}>{props.medicineTime}</div>
        <span>
          <button
            onClick={() => {
              props.onTake(props.id);
            }}
            className={props.editClass}
          >
            {props.medDisplay}
          </button>
          <button
            onClick={() => {
              props.onUpdate(props.id);
            }}
            className="btn btn-primary btn-sm"
          >
            Edit
          </button>
          <button
            onClick={() => {
              props.onRemove(props.id);
            }}
            className="btn btn-danger btn-sm"
          >
            Delete
          </button>
        </span>
      </li>
    </React.Fragment>
  );
};

export default MedicineItem;
