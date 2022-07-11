import Button from "./Button";
import classes from "./ViewMedicines.module.css";
import MedicineItem from "./MedicineItem";
// import Modal from "./Modal";
// import { useState } from "react";

const ViewMedicines = (props) => {
  // const [isDelete, setIsDelete] = useState(false);

  const homePage = () => {
    const home = "home";
    props.onHomePage(home);
  };

  const takeHandler = (id) => {
    props.onStatus(id);
  };

  const removeHandler = (id) => {
    props.onDelete(id);
  }

  const medicines = props.medicines.map((medicine) => {
    return (
      <ul key={medicine.id} className={`${"list-group"} ${classes.view}`}>
        <MedicineItem
          medicineName={medicine.medicineName}
          medicineTime={medicine.medicineTime}
          medDisplay={medicine.status}
          id={medicine.id}
          onTake={takeHandler}
          onRemove={removeHandler}
          editClass={medicine.statusClass}
        />
      </ul>
    );
  });
  return (
    <div className={classes.view}>
      <h4 className="card-title">{props.title}</h4>
      {medicines}
      <Button
        onClick={homePage}
        className="btn btn-primary"
        content="Back to Home"
      />
    </div>
  );
};

export default ViewMedicines;
