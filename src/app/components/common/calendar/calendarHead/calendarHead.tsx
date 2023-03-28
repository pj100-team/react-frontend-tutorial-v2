/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Dispatch, SetStateAction } from "react";
import "./calendarHead.css"



interface Props {
    isMonth:number,
    prevMonth: () => void,
    nextMonth: () => void,
    setIsMonth?: Dispatch<SetStateAction<number>>,
    isYear:number,
}

const CalendarHead: React.FC<Props> = ({
    isMonth,
    prevMonth,
    nextMonth,
    setIsMonth,
    isYear,
}) => {

return (
  <div className="CalendarHead">
    <div className="caption">{isYear}年 {isMonth}月</div>   
    <div className="button"><span onClick={prevMonth}> {"<"} </span></div>
    <div className="button"><span onClick={nextMonth}> {">"} </span></div>
  </div>
)};

export default CalendarHead;
