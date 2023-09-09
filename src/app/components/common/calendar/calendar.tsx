/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import CalendarDays from "./calendarDays";

const Calendar = ( ) => {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    const [thisMonth, setThisMonth] = useState(new Date().getMonth());

    return(
        <div
            css={css`
                width: 900px;
                height: 600px;
                display: flex;
                flex-direction: column;
                margin-top: 2rem;
                margin-left: auto;
                margin-right: auto;
            `}
        >
            <div
                css={css`
                    width: 100%;
                    height: 50px;
                    margin: auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                `}
            >
                <div
                    css={css`
                        width: 25%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        margin: auto 100px;
                    `}
                >
                    <h2>Calendar {new Date().getFullYear()+~~(thisMonth/12)}</h2>
                </div>
                <div
                    css={css`
                        width: 25%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                    `}
                >
                    <button
                        onClick={() => setThisMonth(thisMonth-1)}
                        css={css`
                            margin: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-sizing: border-box;
                            background-color: #dfebeb;
                        `}
                    >
                        <span>
                            prev
                        </span>
                    </button>
                    <p>{months[thisMonth%12]}</p>
                    <button
                        onClick={() => setThisMonth(thisMonth+1)}
                        css={css`
                            margin: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-sizing: border-box;
                            background-color: #dfebeb;
                        `}
                    >
                        <span>
                            next
                        </span>
                    </button>
                </div>
            </div>
            <div
                css={css`
                    width: 100%;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                `}
            >
                <div
                    css={css`
                        height: 100px;
                        width: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                    `}
                >
                    {weekdays.map((weekday) => {return <th>{weekday}</th>})}
                </div>
            </div>
            <CalendarDays currentMonthNumber={thisMonth%12}/>
        </div>
  )
};


  export default Calendar;