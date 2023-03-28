/** @jsxImportSource @emotion/react */
import React, { useState, Dispatch, SetStateAction } from "react";
import dayjs from "dayjs";
import CalendarHead from './calendarHead/calendarHead';
import CalendarBody from './calendarBody/calendarBody';
import "./calendar.css";

interface Props {
}

const Calendar: React.FC<Props> = () => {
  const [isDate, setIsDate] = useState(dayjs().get("date") + 1);
  const [isMonth, setIsMonth] = useState(dayjs().get("month") + 1);
  const [isYear, setIsYear] = useState(dayjs().get("year"));

  const preventDateOutOfRange = (isYear:number, isMonth:number, isDate:number, setIsDate:Dispatch<SetStateAction<number>>) => {
    const lastDayOfMonth = dayjs(`${isYear.toString().padStart(4,"0")}-${isMonth.toString().padStart(2,"0")}-01`).endOf("month").get("date");
    const newIsDate = Math.min(lastDayOfMonth, isDate);
    setIsDate(newIsDate);
  }

  const prevMonth = () => {
      if (isMonth === 1) {
          setIsMonth(12);
          setIsYear((prev) => prev - 1);
      }
      else {
          setIsMonth((prev) => prev - 1);
      }
      preventDateOutOfRange(isYear, isMonth, isDate, setIsDate);
      return ;
  };

  const nextMonth = () => {
      if (isMonth === 12) {
          setIsMonth(1);
          setIsYear((prev) => prev + 1);
      }
      else {
          setIsMonth((prev) => prev + 1);
      }
      preventDateOutOfRange(isYear, isMonth, isDate, setIsDate);
      return;
  };

return (
  <div className="Calendar">
    <CalendarHead isMonth={isMonth} prevMonth={prevMonth} nextMonth={nextMonth} isYear={isYear} setIsMonth={setIsMonth}/>
    <CalendarBody isMonth={isMonth} setIsMonth={setIsMonth} isYear={isYear} setIsYear={setIsYear} isDate={isDate} setIsDate={setIsDate}/>
  </div>
)};

export default Calendar;
