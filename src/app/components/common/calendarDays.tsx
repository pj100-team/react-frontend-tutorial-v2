import React from "react";

interface Props{
    currentMonthNumber: number;
  }

const CalendarDays: React.FC<Props> = ({currentMonthNumber}) => {
    const today = new Date();
    //const currentMonth = today.toLocaleString([], {month: 'long',});
    const firstDay = new Date(today.getFullYear(), currentMonthNumber, 1 );
    const weekdayFirstDay = firstDay.getDay()
    let daysOfTheMonth = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayFirstDay === 0) {
            firstDay.setDate(firstDay.getDate()-7)
        } else if (day === 0) {
            firstDay.setDate(firstDay.getDate()-weekdayFirstDay)
        } else {
            firstDay.setDate(firstDay.getDate()+1)
        }

        let calendarDay = {
            date: new Date(firstDay),
            month: firstDay.getMonth(),
            number: firstDay.getDate(),
            year: firstDay.getFullYear(),
            currentMonth: (firstDay.getMonth() === currentMonthNumber),
            selected: (firstDay.toDateString() === today.toDateString())
        }
        daysOfTheMonth.push(calendarDay)
    }

    return (
        <div className="table-content">
            {daysOfTheMonth.map((day) => {
                return(
                    <div className={"calendar-day" + (day.currentMonth ? " current":"") + (day.selected ? " selected":"")}>
                        <p>{day.number}</p>
                    </div>
                )
            })}
        </div>
    )

}

export default CalendarDays