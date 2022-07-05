import Button from "./Button";
import classes from "./ViewMedicines.module.css";
import MedicineItem from "./MedicineItem";

const ViewMedicines = (props) => {
  const homePage = () => {
    const home = "home";
    props.onHomePage(home);
  };

  const medicines = props.medicines.map((medicine) => {
    return (
      <ul key={medicine.id} className={`${"list-group"} ${classes.view}`}>
        <MedicineItem
          medicineName={medicine.medicineName}
          medicineTime={medicine.medicineTime}
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
