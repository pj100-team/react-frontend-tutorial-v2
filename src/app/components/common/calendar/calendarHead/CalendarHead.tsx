// import { useState } from "react";
import "./CalendarHead.css";

interface calendaraHead {
  isYear: number;
  setIsYear: React.Dispatch<React.SetStateAction<number>>;
  isMonth: number;
  setIsMonth: React.Dispatch<React.SetStateAction<number>>;
}

export const CalenderHead = (props: calendaraHead) => {
  const { isYear, setIsYear, isMonth, setIsMonth } = props;

  //   ボタンクリックで次の月
  const addMonth = () => {
    if (isMonth !== 12) {
      setIsMonth((prevMonth) => prevMonth + 1);
    } else {
      setIsMonth(1);
      setIsYear((prevYear) => prevYear + 1);
    }
  };

  //   ボタンクリックで前の月
  const prevMonth = () => {
    if (isMonth !== 1) {
      setIsMonth((prevMonth) => prevMonth - 1);
    } else {
      setIsMonth(12);
      setIsYear((prevYear) => prevYear - 1);
    }
  };

  return (
    <div className="CalendarHead">
      <button onClick={prevMonth}>＜</button>
      <h3 style={{ fontSize: "22px", paddingTop: "35px" }}>
        {isYear}年 {isMonth}月
      </h3>
      <button onClick={addMonth}>＞</button>
    </div>
  );
};
