import { useEffect, useState } from "react";
import Card from "./Card";
import Footer from "./Footer";
import NavBar from "./NavBar";
import AddMedicine from "./AddMedicine";
import ViewMedicines from "./ViewMedicines";

const Home = (props) => {

  const [medicineList, setMedicineList] = useState(
    JSON.parse(localStorage.getItem("medicines"))
  );
  const [mode, setMode] = useState("home");

  useEffect(() => {
    if (medicineList === null) {
      setMedicineList([]);
    } else {
      setMedicineList(medicineList);
    }
  }, [medicineList]);

  useEffect(() => {
    localStorage.setItem("medicines", JSON.stringify(medicineList));
  }, [medicineList]);

  const add = "Add medicines";
  const view = "View medicines";

  const addMedicineHandler = (medicine) => {
    setMedicineList((prevMedicineList) => {
      localStorage.setItem(
        "medicines",
        JSON.stringify([medicine, ...prevMedicineList])
      );
      return [medicine, ...prevMedicineList];
    });
  };

  const statusHandler = (id) => {
    const newMedicineList = medicineList.map((medicine) => {
      if (medicine.id === id) {
        const updatedMedicine = {
          ...medicine,
          status: "Good job!",
          statusClass: "btn btn-success btn-sm",
        };
        return updatedMedicine;
      }
      return medicine;
    });
    setMedicineList(newMedicineList);
    localStorage.setItem("medicines", JSON.stringify(newMedicineList));
  };

  const deleteHandler = (id) => {
    const newMedicineList = medicineList.filter((medicine) => {
      return medicine.id !== id;
    });
    setMedicineList(newMedicineList);
    localStorage.setItem("medicines", JSON.stringify(newMedicineList));
  };

  const resetHandler = () => {
    const newMedicineList = medicineList.map((medicine) => {
      const updatedMedicine = {
        ...medicine,
        status: "Take",
        statusClass: "btn btn-primary btn-sm",
      };
      return updatedMedicine;
    });
    setMedicineList(newMedicineList);
    localStorage.setItem("medicines", JSON.stringify(newMedicineList));
  };

  const editHandler = (medName, medTime, id) => {
    const editedMedicineList = medicineList.map((medicine) => {
      if (medicine.id === id) {
        const editedMedicine = {
          ...medicine,
          medicineName: medName,
          medicineTime: medTime,
        };
        return editedMedicine;
      }
      return medicine;
    });
    setMedicineList(editedMedicineList);
    localStorage.setItem("medicines", JSON.stringify(editedMedicineList));
  };

  const pageHandler = (input) => {
    setMode(input);
  };

  return (
    <div>
      <NavBar onHomePage={pageHandler} />
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
          button="Add"
          mode="add"
          back="Back to Home"
          medicineName=""
          medicineTime=""
        />
      )}
      {mode === view && (
        <ViewMedicines
          onHomePage={pageHandler}
          onStatus={statusHandler}
          onDelete={deleteHandler}
          onReset={resetHandler}
          onEdit={editHandler}
          medicines={medicineList}
          title={view}
        />
      )}
      <Footer content="Copyright 2022 Somshubro Chatterjee" />
    </div>
  );
};

export default Home;
