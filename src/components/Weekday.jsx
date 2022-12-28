import React from "react";

const Weekday = ({ day }) => {
  return (
    <div className="weekday" id={day}>
      {day}
    </div>
  );
};

export default Weekday;
