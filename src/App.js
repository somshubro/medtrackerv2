import Home from "./UI/Home";

const DUMMY_MEDICINES = [
  {
    id: "1",
    medicineName: "Crocin",
    medicineTime: "03:00",
    status: "Take",
    statusClass: "btn btn-primary btn-sm",
  },
  {
    id: "2",
    medicineName: "Digene",
    medicineTime: "06:00",
    status: "Take",
    statusClass: "btn btn-primary btn-sm",
  },
  {
    id: "3",
    medicineName: "Calpol",
    medicineTime: "04:00",
    status: "Take",
    statusClass: "btn btn-primary btn-sm",
  },
  {
    id: "4",
    medicineName: "Festal N",
    medicineTime: "05:00",
    status: "Take",
    statusClass: "btn btn-primary btn-sm",
  },
];

const App = () => {
  return <Home data={DUMMY_MEDICINES} />;
};

export default App;
