import React from "react";
import { useEffect } from "react";
import { mapMonth } from "../App";

const months = {
  0: "Enero",
  1: "Febrero",
  2: "Marzo",
  3: "Abril",
  4: "Mayo",
  5: "Junio",
  6: "Julio",
  7: "Agosto",
  8: "Septiembre",
  9: "Octubre",
  10: "Noviembre",
  11: "Diciembre",
};

const Acciones = ({ firstDay, setFirstDay, yearMonth, setYearMonth }) => {
  const aumentarMes = () => {
    if (yearMonth[0] == 11) {
      setYearMonth([0, yearMonth[1] + 1]);
    } else {
      setYearMonth([yearMonth[0] + 1, yearMonth[1]]);
    }
  };

  useEffect(() => {
    setFirstDay(mapMonth(yearMonth)[0]);
  }, [yearMonth]);

  const disminuirMes = () => {
    if (yearMonth[0] == 0) {
      setYearMonth([11, yearMonth[1] - 1]);
    } else {
      setYearMonth([yearMonth[0] - 1, yearMonth[1]]);
    }
    setFirstDay(mapMonth(yearMonth)[0]);
  };

  return (
    <div className="mes-acciones">
      <div className="disminuir-mes" onClick={disminuirMes}>
        {`<`}
      </div>
      <div className="mes">
        {months[yearMonth[0]]}, {yearMonth[1]}
      </div>
      <div className="aumentar-mes" onClick={aumentarMes}>
        {`>`}
      </div>
    </div>
  );
};

export default Acciones;
