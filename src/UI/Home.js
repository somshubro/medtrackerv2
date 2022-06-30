import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AddMedicine from "./AddMedicine";
import ViewMedicines from "./ViewMedicines";

const Home = (props) => {
  const [mode, setMode] = useState("home");
  const [medicineList, setMedicineList] = useState([]);
  const add = "Add medicines";
  const view = "View medicines";

  const addMedicineHandler = (mName, mTime) => {
    setMedicineList((prevMedicineList) => {
      return [
        prevMedicineList,
        {
          id: Math.random().toString(),
          medicineName: mName,
          medicineTime: mTime,
        },
      ];
    });
  };

  const pageHandler = (input) => {
    setMode(input);
  };

  return (
    <div>
      <NavBar />
      {mode === "home" && (
        <div>
          <Card
            title={add}
            content="You can add medicines from here"
            onClickButton={pageHandler}
          />
          <Card
            title={view}
            content="You can view your reminders from here"
            onClickButton={pageHandler}
          />{" "}
        </div>
      )}
      {mode === add && (
        <AddMedicine
          onAdd={addMedicineHandler}
          medicineTime="Enter the time at which you're supposed to take this medicine"
          medicineName="Enter the medicine name"
          onHomePage={pageHandler}
          title={add}
        />
      )}
      {mode === view && (
        <ViewMedicines onHomePage={pageHandler} medicines={medicineList} title={view} />
      )}
      <Footer content="Copyright 2021" />
    </div>
  );
};

export default Home;
