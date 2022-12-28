import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const MapSpaces = ({ spaces }) => {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    const newArr = [];
    for (let i = 0; i < spaces; i++) {
      newArr.push(i);
    }
    setArr(newArr);
    //console.log(spaces)
  }, [spaces]);
  return (
    <>
      {arr.map((item) => {
        return <div key={`${item}item`}> </div>;
      })}
    </>
  );
};

export default MapSpaces;
