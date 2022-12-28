import React from "react";
import { useContext } from "react";
import { DateContext } from "../App";
const FechaClickeada = () => {
  const { fechaClickeada } = useContext(DateContext);
  const date = new Date(fechaClickeada);
  return (
    <div className="fecha-actual">
      La fecha es {date.getDate()}/{date.getMonth() + 1}/{date.getFullYear()}
    </div>
  );
};

export default FechaClickeada;
