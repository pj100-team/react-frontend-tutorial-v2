/** @jsxImportSource @emotion/react */
import React from "react";
import './calendar.css'
import Calendar from "./calendar";

interface Props{
    // width: string;
}

const DatePicker:React.FC<Props> = ({}) => {
    return (
        <div className="datepicker-container">
            <div className="background-container"></div>
            <Calendar></Calendar>
        </div>
    );
}


export default DatePicker