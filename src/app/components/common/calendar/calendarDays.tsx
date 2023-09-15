/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

interface Props{
    currentMonthNumber: number;
  }

const CalendarDays: React.FC<Props> = ({currentMonthNumber}) => {
    const today = new Date();
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
        <div
            css={css`
                width: 100%;
                flex-grow: 1;
                display: flex;
                flex-wrap: wrap;
                justify-content: center;
                box-sizing: border-box;
            `}
        >
            {daysOfTheMonth.map((day) => {
                return(
                    <div
                        css={css`
                            width: 125px;
                            height: 75px;
                            border: 1px solid #a6a6a6;
                            color: #a6a6a6
                        `}
                    >
                        <div css= {(day.currentMonth ? css`color: #000000` : "")}>
                            <div css= {(day.selected ?
                                css`
                                    color: #cc0000;
                                    font-weight: bold;
                                `
                            : "")}>
                                <p>{day.number}</p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )

}

export default CalendarDays