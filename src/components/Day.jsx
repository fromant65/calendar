import React from "react";
import { useContext } from "react";
import { DateContext } from "../App";

const Day = ({ day, month, year }) => {
  const { setFechaClickeada } = useContext(DateContext);
  const setNewDate = () => {
    setFechaClickeada(new Date(year, month, day));
  };
  return <div onClick={setNewDate}>{day}</div>;
};

export default Day;
