import React, { useEffect, useState } from "react";
import "./App.css";
import Weekday from "./components/Weekday";
import MapSpaces from "./components/MapSpaces";
import MapMonth from "./components/MapMonth";
import Acciones from "./components/Acciones";
import FechaClickeada from "./components/FechaClickeada";

export const mapMonth = (yearMonth) => {
  //console.log(yearMonth[0], yearMonth[1])
  const month = [];
  for (let i = 1; i <= 31; i++) {
    const day = new Date(yearMonth[1], yearMonth[0], i);
    //console.log(day)
    if (day.getMonth() !== yearMonth[0]) break;
    month.push(day);
  }
  return month;
};

export const DateContext = React.createContext();

function App() {
  const date = new Date();
  const [fechaClickeada, setFechaClickeada] = useState(date);
  const [yearMonth, setYearMonth] = useState([
    date.getMonth(),
    date.getFullYear(),
  ]);

  const [firstDay, setFirstDay] = useState(mapMonth(yearMonth)[0]);

  return (
    <DateContext.Provider value={{ fechaClickeada, setFechaClickeada }}>
      <div className="container">
        <Acciones
          firstDay={firstDay}
          setFirstDay={setFirstDay}
          yearMonth={yearMonth}
          setYearMonth={setYearMonth}
        />
        <div className="weekdays">
          <Weekday day="Dom" />
          <Weekday day="Lun" />
          <Weekday day="Mar" />
          <Weekday day="Mie" />
          <Weekday day="Jue" />
          <Weekday day="Vie" />
          <Weekday day="Sab" />
        </div>
        <div className="monthdays">
          <MapSpaces spaces={firstDay.getDay()} />
          <MapMonth date={date} yearMonth={yearMonth} />
        </div>
        <FechaClickeada fechaClickeada={fechaClickeada} />
      </div>
    </DateContext.Provider>
  );
}

export default App;
