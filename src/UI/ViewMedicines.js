import Button from "./Button";
import classes from "./ViewMedicines.module.css";

const ViewMedicines = (props) => {
  const homePage = () => {
    const home = "home";
    props.onHomePage(home);
  };

  return (
    <div className={classes.view} >
    <h4 className="card-title">{props.title}</h4>
      <ul className="list-group">
        {props.medicines.map((medicine) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={medicine.id}
          >
            {medicine.medicineName}
            <span className="badge badge-primary badge-pill">
              {medicine.medicineTime}
            </span>
          </li>
        ))}
      </ul>
      <Button
        onClick={homePage}
        className="btn btn-primary"
        content="Back to Home"
      />
    </div>
  );
};

export default ViewMedicines;
