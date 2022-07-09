import Home from "./UI/Home";

const DUMMY_MEDICINES = [
  {
    id: "1",
    medicineName: "Crocin",
    medicineTime: "03:00",
  },
  { id: "2", medicineName: "Digene", medicineTime: "06:00" },
  {
    id: "3",
    medicineName: "Calpol",
    medicineTime: "04:00",
  },
  {
    id: "4",
    medicineName: "Festal N",
    medicineTime: "05:00",
  },
];

const App = () => {
  return <Home data={DUMMY_MEDICINES} />;
};

export default App;
