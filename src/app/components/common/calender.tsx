/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Pallet } from "../../view/helper/colorHelper";

const today = new Date();
type DayObj = {date:number,isThisMonth:boolean,isTodayMonthYear:boolean}

const createDateArray = (showDate: Date) => {
const year = showDate.getFullYear();
const month = showDate.getMonth();
const lastMonthEndDate = new Date(year, month, 0).getDate();
const startDayOfWeek = new Date(year, month, 1).getDay();
const firstDateOfPage = lastMonthEndDate - startDayOfWeek + 1;
const endDateOfMonth = new Date(year, month + 1, 0).getDate();
const row = Math.ceil((startDayOfWeek + endDateOfMonth) / 7);

interface Week{
Sunday: DayObj;
Monday: DayObj;
Tuesday: DayObj;
Wednesday: DayObj;
Thursday: DayObj;
Friday: DayObj;
Saturday: DayObj;
}

function weekday(i:number,j:number):DayObj {
  const aDay=new Date(year,month,firstDateOfPage+7*i+j-lastMonthEndDate);
  return{date:aDay.getDate(),isThisMonth:aDay.getFullYear() == showDate.getFullYear() && aDay.getMonth() == showDate.getMonth(),isTodayMonthYear:aDay.getFullYear() == today.getFullYear() && aDay.getMonth() == today.getMonth()}
}

const allWeek:Week[] = [...Array<number>(row)].map((_,i)=>(
{Sunday: weekday(i,0),
Monday: weekday(i,1),
Tuesday: weekday(i,2),
Wednesday: weekday(i,3),
Thursday: weekday(i,4),
Friday: weekday(i,5),
Saturday: weekday(i,6),}))

return allWeek

}

const dateCell = (day:DayObj) => (
  <td css={css`
  color:${day.isThisMonth ? Pallet.Black:Pallet.Gray};
  background-color:${day.date === today.getDate() && day.isTodayMonthYear ? Pallet.Red:Pallet.White};
  `}>{day.date}</td>
)

const Calender : React.FC = () => {
  const [showDate, setShowDate] = useState(today);
  return(
    <div>
      <div>
        <button onClick={() => setShowDate(pre=>new Date(pre.getFullYear(),pre.getMonth()-1))}>前の月</button>
        <button onClick={() => setShowDate(pre=>new Date(pre.getFullYear(),pre.getMonth()+1))}>次の月</button>
      </div>
      <h3>{showDate.getFullYear()}年{showDate.getMonth()+1}月</h3>
      <table>
        <tr>
          <th>日</th><th>月</th><th>火</th><th>水</th><th>木</th><th>金</th><th>土</th>
        </tr>
        {createDateArray(showDate).map(Week =>
        <tr>
          {dateCell(Week.Sunday)}
          {dateCell(Week.Monday)}
          {dateCell(Week.Tuesday)}
          {dateCell(Week.Wednesday)}
          {dateCell(Week.Thursday)}
          {dateCell(Week.Friday)}
          {dateCell(Week.Saturday)}
        </tr>)
        }
      </table>
    </div>
  )
}

export default Calender;
