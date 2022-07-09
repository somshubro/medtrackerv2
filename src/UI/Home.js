import { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AddMedicine from "./AddMedicine";
import ViewMedicines from "./ViewMedicines";

const Home = (props) => {
  const [mode, setMode] = useState("home");
  const [medicineList, setMedicineList] = useState(props.data);
  const add = "Add medicines";
  const view = "View medicines";

  const addMedicineHandler = (medicine) => {
    setMedicineList((prevMedicineList) => {
      return [medicine, ...prevMedicineList]
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
          titleName="Enter the medicine name"
          titleTime="Enter the time at which you're supposed to take this medicine"
          onHomePage={pageHandler}
          title={add}
        />
      )}
      {mode === view && (
        <ViewMedicines onHomePage={pageHandler} medicines={medicineList} title={view} />
      )}
      <Footer content="Copyright 2022 Somshubro Chatterjee" />
    </div>
  );
};

export default Home;
