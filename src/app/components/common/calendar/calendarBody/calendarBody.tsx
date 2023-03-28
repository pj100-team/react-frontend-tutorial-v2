/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { Dispatch, SetStateAction } from "react";
import "./calendarBody.css";
import dayjs from "dayjs";
import {weekdaysShort as weekdays} from 'dayjs/locale/ja';


interface Props {
    isYear:number,
    setIsYear ?: Dispatch<SetStateAction<number>>,
    isMonth:number,
    setIsMonth ?: Dispatch<SetStateAction<number>>, 
    isDate:number,
    setIsDate: Dispatch<SetStateAction<number>>,
}

const CalendarBody: React.FC<Props> = ({
    isYear = dayjs().get("year"),
    setIsYear,
    isMonth = dayjs().get("month"),
    setIsMonth,
    isDate = dayjs().get("date"),
    setIsDate,
}) => {
    const selectedDate = dayjs(`${isYear.toString().padStart(4,"0")}-${isMonth.toString().padStart(2,"0")}-${isDate.toString().padStart(2,"0")}`);
    const today = dayjs();
    const todayIsInMonth = selectedDate.startOf("month") <= today && today < selectedDate.endOf("month").add(1, "day");
    const startDayOfMonth = selectedDate.startOf("month");
    const endDayOfMonth = selectedDate.endOf("month");
    const endDayOfPrevMonth = startDayOfMonth.add(-1, "day");
    
    const daysmap = [];
    let currMonthDayCount = 1;
    let nextMonthDayCount = 1;
    for (let i = 0; i < 6; i ++){
        if (currMonthDayCount > endDayOfMonth.get("date")) break;
        const week = [];
        for (let j = 0; j < 7; j ++){
            if (i === 0 && j < startDayOfMonth.get("day") ){
                week.push(endDayOfPrevMonth.get("date") - endDayOfPrevMonth.get("day") + j);
            }
            else if ( currMonthDayCount > endDayOfMonth.get("date")){
                week.push( nextMonthDayCount ++);
            }
            else {
                week.push(currMonthDayCount ++) ;
            }
        }
        daysmap.push(week);
    }

return (
  <div className="CalendarBody">
    <table className="DaysTable">
        <tr>{(weekdays as string[]).map((weekday) => <th>{weekday}</th>)}</tr>
        {daysmap.map( (week, i) => {
            return (
                <tr>{
                    week.map( (date, j) => {
                        let className = "";
                        let spanClassName = "";

                        if (i === 0 && date > 21) className += "PrevMonth";
                        else if (i === daysmap.length - 1 && date <= 7) className += "NextMonth";
                        else {
                            className += "CurrMonth";
                            if(todayIsInMonth && today.get("date") === date && today.get("month") + 1 === isMonth && today.get("year") === isYear) className += " -Today";
                            if(isDate === date) className += " -Selected";
                        }

                        if (j === 0) className += " -Sunday";
                        else if (j === 6) className += " -Saturday";
                        else className += " -Weekday";

                        return (
                            <td className={className}>{date}</td>
                        )
                    })
                }</tr>
            )}
        )}
    </table>
    
  </div>
)};

export default CalendarBody;
