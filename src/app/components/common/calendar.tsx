/** @jsxImportSource @emotion/react */
import React ,{ useState } from "react";
import "./calendar.css"
import CalendarDays from "./calendarDays";

const Calendar = ( ) => {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    const [thisMonth, setThisMonth] = useState(new Date().getMonth());

    return(
        <div className="calendar">
            <div className="calendar-header">
                <div className="title">
                    <h2>Calendar</h2>
                </div>
                <div className="tools">
                    <button onClick={() => setThisMonth(thisMonth-1)}>
                        <span className="material-icons">
                            prev
                        </span>
                    </button>
                    <p>{months[thisMonth]}</p>
                    <button onClick={() => setThisMonth(thisMonth+1)}>
                        <span className="material-icons">
                            next
                        </span>
                    </button>
                </div>
            </div>
            <div className="calendar-body">
                <div className="table-header">{weekdays.map((weekday) => {return <th>{weekday}</th>})}</div>
            </div>
            <CalendarDays currentMonthNumber={thisMonth}/>
        </div>
  )
};


  export default Calendar;