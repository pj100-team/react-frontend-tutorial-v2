/** @jsxImportSource @emotion/react */
import React from "react";
import './calendar.css'
import { Weekday, Date } from "../../../mock/data/types"; // import types
import Days from "../../../mock/data/Days";

interface Props{
    value?: Date;
    onChange: (date: Date) => void;
}

const Calendar:React.FC<Props> = ({ value = new Date(), onChange}) => {

    const Weekdays: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const handleClickDate = (index: number) => {
        const date = setDate(value, index);
        onChange(date);
    }

    // split all the days into weeks
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
        for (let i=0; i < 7; i++) { // 7 because we will run this over each weekArray
            return (<button className="date" value={date}><p>{date}</p></button>)
        }
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container"></div>
            <span> February 2021 </span>
            <div className="weekdays-container">
                {Weekdays.map(day => 
                    <div className="weekday">{day}</div>)} {/* print each weekday out */}
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