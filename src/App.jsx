import { useEffect, useState } from "react";
import "./App.css";
import Weekday from "./components/Weekday";
import MapSpaces from "./components/MapSpaces";
function App() {
  const date = new Date();
  const [yearMonth, setYearMonth] = useState([
    date.getMonth(),
    date.getFullYear(),
  ]);

  const mapMonth = () => {
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

  const [firstDay, setFirstDay] = useState(mapMonth()[0]);

  const aumentarMes = () => {
    if (yearMonth[0] == 11) {
      setYearMonth([0, yearMonth[1] + 1]);
    } else {
      setYearMonth([yearMonth[0] + 1, yearMonth[1]]);
    }
  };

  useEffect(() => {
    setFirstDay(mapMonth()[0]);
  }, [yearMonth]);

  const disminuirMes = () => {
    if (yearMonth[0] == 0) {
      setYearMonth([11, yearMonth[1] - 1]);
    } else {
      setYearMonth([yearMonth[0] - 1, yearMonth[1]]);
    }
    setFirstDay(mapMonth()[0]);
  };

  return (
    <>
      <div className="container">
        <div className="mes-acciones">
          <div className="disminuir-mes" onClick={disminuirMes}>
            {`<`}
          </div>
          <div className="mes">
            {yearMonth[0] + 1}/{yearMonth[1]}
          </div>
          <div className="aumentar-mes" onClick={aumentarMes}>
            {`>`}
          </div>
        </div>

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
          {mapMonth().map((day) => {
            const todayDate = new Date(
              date.getFullYear(),
              date.getMonth(),
              date.getDate()
            );
            const isToday =
              todayDate.getFullYear() === day.getFullYear() &&
              todayDate.getMonth() === day.getMonth() &&
              todayDate.getDate() === day.getDate();
            //console.log(day, todayDate, isToday)
            return (
              <div className={isToday ? "today" : ""}>{day.getDate()}</div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
