import React from "react";
import { mapMonth } from "../App";
import Day from "./Day";
const MapMonth = ({ date, yearMonth }) => {
  return (
    <>
      {mapMonth(yearMonth).map((day) => {
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
          <div
            className={isToday ? "today" : "day"}
            key={`day${day.getDate()}`}
          >
            <Day
              day={day.getDate()}
              month={day.getMonth()}
              year={day.getFullYear()}
            />
          </div>
        );
      })}
    </>
  );
};

export default MapMonth;
