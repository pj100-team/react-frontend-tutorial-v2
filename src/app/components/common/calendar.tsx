/** @jsxImportSource @emotion/react */
import React from "react";
import './calendar.css'

interface Props{
    today: Date;
    month: number;
    year: number;
}

const Calendar:React.FC<Props> = ({ today, month, year}) => {

    const Weekdays: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    const firstWeekday = (new Date(year, month, 1)).getDay(); // returns a num from 0 to 6
    const lastWeekday = (new Date(year, month + 1, 0)).getDay();
    const lastDateThisMonth = (new Date(year, month + 1, 0)).getDate();

    function generatePrevMonthDates(n:number): number[] {
        let dates: number[] = [];
        // find last date of previous month
        const lastDatePrevMonth = (new Date(year, month, 0)).getDate();
        for (let i = n-1; i > -1 ; i--) {
            dates.push(lastDatePrevMonth - i);
        }
        return dates;
    }

    function generateNextMonthDates (n:number): number[] {
        let dates: number[] = [];
        for (let i = 0; i < n ; i++) {
            // find last date of previous month
            dates.push(1 + i);
        }
        return dates;
    }

    function generateDates(): number[] {
        let dates: number[] = [];
        for (let i = 1; i < lastDateThisMonth + 1; i++) {
            dates.push(i);
        }
        return dates;
    }

    const prevMonthDates = generatePrevMonthDates(firstWeekday);
    const nextMonthDates = generateNextMonthDates(6-lastWeekday);
    const thisMonthDates = generateDates();

    const monthDates = (prevMonthDates.concat(thisMonthDates)).concat(nextMonthDates);

    // split all the days into weeks
    // const generateWeeks = (dates: number[]) => {
    //     let daysInAWeek = 7;
    //     let weekArray = [];

    //     for (let i = 0; i < dates.length; i += daysInAWeek) {
    //         weekArray.push(dates.slice(i, i+daysInAWeek));
    //     }

    //     return weekArray;
    // }

    // make each date clickable 
    // const generateDateButtons = (date: number) => {
    //     for (let i=0; i < 7; i++) { // 7 because we will run this over each weekArray
    //         return (<button className="date" value={date}><p>{date}</p></button>)
    //     }
    // }

    const todayDate = today.getDate();
    const todayMonth = today.getMonth();

    const generateDateButtons = (date: number, index: number) => {
        if (index < firstWeekday || index >= firstWeekday + lastDateThisMonth) {
            return(<button className="otherMonths"><p>{date}</p></button>)
        } else if (date === todayDate && month === todayMonth){
            return(<button className="today"><p>{date}</p></button>)
        } else {
            return(<button><p>{date}</p></button>)
        }
    }

    return (
        <div className="calendar-container">
            <div className="datepicker-container"></div>
            <div className="weekdays-container">
                {Weekdays.map(day => 
                    <div className="weekday">{day}</div>)} {/* print each weekday out */}
            </div>  

            <div className="calendar">
                {monthDates.map((date, index) => 
                    generateDateButtons(date, index))}
            </div>
        </div>
    );
}


export default Calendar