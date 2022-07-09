import Button from "./Button";
import classes from "./MedicineItem.module.css";

const MedicineItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.medicineName}
      <div className={classes.time}>
        {props.medicineTime}
      </div>
      <Button content="Delete" className="btn btn-primary btn-sm"/>
    </li>
  );
};

export default MedicineItem;
