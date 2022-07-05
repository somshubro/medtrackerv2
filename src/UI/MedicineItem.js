const MedicineItem = (props) => {
  return (
      <li className="list-group-item d-flex justify-content-between align-items-center">
        {props.medicineName}
        <span className="badge badge-primary badge-pill">
          {props.medicineTime}
        </span>
      </li>
  );
};

export default MedicineItem;
