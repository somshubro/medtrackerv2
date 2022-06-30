import Home from "./UI/Home";

const DUMMY_MEDICINES = [
  {
    id: "1",
    medicineName: "Crocin",
    medicineTime: "3:00",
  },
  { id: "2", medicineName: "Digene", medicineTime: "6:00" },
  {
    id: "3",
    medicineName: "Calpol",
    medicineTime: "4:00",
  },
  {
    id: "4",
    medicineName: "Festal N",
    medicineTime: "5:00",
  },
];

const App = () => {
  return <Home data={DUMMY_MEDICINES} />;
};

export default App;
