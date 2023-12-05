/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import './calendar.css'
import Calendar from "./calendar";
import Button from "./button";
import Title from "./title";


interface Props{
    // width: string;
}

const CalendarApp:React.FC<Props> = ({}) => {

    const Months: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const today: Date = new Date();

    const [thisMonth, setMonth] = useState (today.getMonth());
    const [thisYear, setYear] = useState(today.getFullYear());

    const handleSetPrevMonthandYear = () => {
        if (thisMonth === 0) {
            setMonth(11);
            setYear(thisYear - 1);
        } else {
            setMonth(thisMonth - 1);
        }
    }
    const handleSetNextMonthandYear = () => {
        if (thisMonth === 11) {
            setMonth(0);
            setYear(thisYear + 1);
        } else {
            setMonth(thisMonth + 1);
        }
    }

    return (
        <div className="calendarapp-container">
            <div className="background-container"></div>
            <div className="header-container">
                <button onClick={handleSetPrevMonthandYear}>&lt;</button>
                <label>{Months[thisMonth]} {thisYear}</label>
                <button onClick={handleSetNextMonthandYear}>&gt;</button>
            </div>
            <Calendar today={today} month={thisMonth} year={thisYear}/>
        </div>
    );
}

export default CalendarApp