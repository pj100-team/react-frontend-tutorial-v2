/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import CalendarDays from "./calendarDays";

const Calendar = ( ) => {
    const weekdays = ['日', '月', '火', '水', '木', '金', '土'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];

    const [targetYearMonth, setTargetYearMonth] = useState({year:new Date().getFullYear(), month: new Date().getMonth()});

    return(
        <div
            css={css`
                --WhiteBlue: #dfebeb;
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
                    <h2>Calendar {targetYearMonth.year}</h2>
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
                        onClick={() => setTargetYearMonth(pre => {
                            if(pre.month === 0){
                                return {
                                    month: 11,
                                    year: pre.year - 1
                                }
                            }
                            return {
                                ...pre,
                                month: pre.month - 1
                            }
                        })}
                        css={css`
                            margin: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-sizing: border-box;
                            background-color: var(--WhiteBlue);
                        `}
                    >
                        <span>
                            prev
                        </span>
                    </button>
                    <p>{months[targetYearMonth.month]}</p>
                    <button
                        onClick={() => setTargetYearMonth(pre => {
                            if(pre.month === 11){
                                return {
                                    month: 0,
                                    year: pre.year + 1
                                }
                            }
                            return {
                                ...pre,
                                month: pre.month + 1
                            }
                        })}
                        css={css`
                            margin: auto;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            box-sizing: border-box;
                            background-color: var(--WhiteBlue);
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
            <CalendarDays currentMonthNumber={targetYearMonth.month}/>
        </div>
  )
};


  export default Calendar;