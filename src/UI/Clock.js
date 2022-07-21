import React, { useState } from "react";
import classes from "./Clock.module.css";

const Clock = () => {
  const time = new Date();

  const correctMinutes = (minutes) => {
    if (minutes.toString().length === 1) {
      minutes = "0" + minutes;
    }
    return minutes;
  };

  const displayedTime =
    time.getHours() + ":" + correctMinutes(time.getMinutes());

  const [currentTime, setTime] = useState(displayedTime);

  const updateTime = () => {
    const newTime = new Date();
    const setNewtime =
      newTime.getHours() + ":" + correctMinutes(newTime.getMinutes());
    setTime(setNewtime);
  };

  setInterval(updateTime, 60000);

  return <h2 className={classes.clock}>{currentTime}</h2>;
};

export default Clock;
