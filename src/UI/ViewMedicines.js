import Button from "./Button";
import classes from "./ViewMedicines.module.css";
import MedicineItem from "./MedicineItem";
import React, { useState } from "react";
import AddMedicine from "./AddMedicine";
import Modal from "./Modal";

let medName = "";
let medTime = "";
let medicineId = undefined;
let deleteMedicineId = undefined;

const insertMedicine = (mName, mTime) => {
  medName = mName;
  medTime = mTime;
};

const confirmHandler = (id) => {
  deleteMedicineId = id;
};

const ViewMedicines = (props) => {
  const [isDelete, setIsDelete] = useState(false);
  const [mode, setMode] = useState("view");
  const [noMedicine, setNoMedicine] = useState(props.medicines.length === 0);

  const homePage = () => {
    const home = "home";
    props.onHomePage(home);
  };

  const takeHandler = (id) => {
    props.onStatus(id);
  };

  const removeHandler = (id) => {
    setIsDelete(true);
    confirmHandler(id);
  };

  const cancelHandler = () => {
    setIsDelete(false);
  };

  const deleteConfirmHandler = () => {
    props.onDelete(deleteMedicineId);
    setIsDelete(false);
    if (props.medicines.length === 1) {
      setNoMedicine(true);
    }
  };

  const updateHandler = (id) => {
    setMode("edit");
    medicineId = id;
    props.medicines.map((medicine) => {
      if (medicine.id === medicineId) {
        insertMedicine(
          medicine.medicineName,
          medicine.medicineTime,
          medicine.id
        );
      }
      return medicine;
    });
  };

  const amendHandler = (medicine, time, id) => {
    props.onEdit(medicine, time, id);
  };

  const backHandler = (input) => {
    setMode(input);
  };

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
          onUpdate={updateHandler}
          editClass={medicine.statusClass}
        />
      </ul>
    );
  });
  return (
    <React.Fragment>
      {isDelete && (
        <Modal
          title="Are you sure?"
          message="This medicine will be deleted"
          button="Cancel"
          additionalButton="Delete"
          onConfirm={cancelHandler}
          onDelete={deleteConfirmHandler}
        />
      )}
      {mode === "edit" && (
        <AddMedicine
          title="Edit medicine"
          button="Save"
          mode="edit"
          back="Back to reminders"
          onReminders={backHandler}
          medicineName={medName}
          medicineTime={medTime}
          medicineId={medicineId}
          onEdit={amendHandler}
        />
      )}
      {mode === "view" && (
        <div className={classes.view}>
          <h4 className="card-title">{props.title}</h4>
          {noMedicine && (
            <p>There are currently no medicines to be displayed.</p>
          )}
          {medicines}
          <Button
            onClick={homePage}
            className="btn btn-primary"
            content="Back to Home"
          />
          {!noMedicine && (
            <Button
              onClick={props.onReset}
              className="btn btn-primary"
              content="Reset All"
            />
          )}
        </div>
      )}
    </React.Fragment>
  );
};

export default ViewMedicines;
