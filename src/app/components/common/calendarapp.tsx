/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import './calendar.css'
import Calendar from "./calendar";
import Button from "./button";


interface Props{
    // width: string;
}

const CalendarApp:React.FC<Props> = ({}) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const handleSetToday = () => setCurrentDate(new Date());
    
    return (
        <div className="datepicker-container">
            <div className="background-container"></div>
            <p>
                Selected Date: {currentDate}
            </p>

            <Button onClick={handleSetToday}>Today</Button>
            <Calendar value={currentDate} onChange={setCurrentDate}/>
        </div>
    );
}


export default CalendarApp