/** @jsxImportSource @emotion/react */
import React from "react";
import './calendar.css'
import { Weekday, Date } from "../../../mock/data/types";
import { Weekdays } from "../../../mock/data/Weekdays";
import Days from "../../../mock/data/Days";

interface Props{

}

const Calendar:React.FC<Props> = ({}) => {

    const generateWeeks = (dates: Array<Date>) => {
        let daysInAWeek = 7;
        let weekArray = [];

        for (let i = 0; i < dates.length; i += daysInAWeek) {
            weekArray.push(dates.slice(i, i+daysInAWeek));
        }

        return weekArray;
    }

    // make each date clickable
    const generateDates = (date: number) => {
        for (let i=0; i < 7; i++) {
            return (<button className="date" value={date}><p>{date}</p></button>) // so that we can click
        }
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container"></div>
            <div className="weekdays-container">
                {Weekdays.map(day => 
                    <div className="weekday">{day}</div>)}
            </div>
            <div className="calendar">
                { (generateWeeks (Days)).map(week =>
                    <div className="week">
                        {week.map(day => generateDates(day.day))}
                    </div>) }
            </div>
        </div>
    );
}


export default Calendar