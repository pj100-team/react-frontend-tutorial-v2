/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Pallet } from "../../view/helper/colorHelper";

// interface DateMonthToday{
//   date:number;
//   isThisMonth:boolean;
//   isToday:boolean;
// }

const createDateArray = (showDate: Date) => {
var year = showDate.getFullYear();
var month = showDate.getMonth();
var lastMonthEndDate = new Date(year, month, 0).getDate();
var startDayOfWeek = new Date(year, month, 1).getDay();
var firstDateOfPage = lastMonthEndDate - startDayOfWeek + 1;
var endDateOfMonth = new Date(year, month + 1, 0).getDate();
var row = Math.ceil((startDayOfWeek + endDateOfMonth) / 7);

interface Week{
Sunday: {date:number,isThisMonth:boolean,isToday:boolean};
Monday: {date:number,isThisMonth:boolean,isToday:boolean};
Tuesday: {date:number,isThisMonth:boolean,isToday:boolean};
Wednesday: {date:number,isThisMonth:boolean,isToday:boolean};
Thursday: {date:number,isThisMonth:boolean,isToday:boolean};
Friday: {date:number,isThisMonth:boolean,isToday:boolean};
Saturday: {date:number,isThisMonth:boolean,isToday:boolean};
}

function weekday(i:number,j:number):{date:number,isThisMonth:boolean,isToday:boolean,} {
if(firstDateOfPage+7*i+j-lastMonthEndDate <= 0){
  if(year == new Date().getFullYear() && month == new Date().getMonth()){
    return {date:firstDateOfPage+7*i+j,isThisMonth:false,isToday:true};
  }
  else {
    return {date:firstDateOfPage+7*i+j,isThisMonth:false,isToday:false};
  }
}
else if(0 < firstDateOfPage+7*i+j-lastMonthEndDate && firstDateOfPage+7*i+j-lastMonthEndDate <= endDateOfMonth){
  if(year == new Date().getFullYear() && month == new Date().getMonth()){
    return {date:firstDateOfPage+7*i+j-lastMonthEndDate,isThisMonth:true,isToday:true};
  }
  else {
    return {date:firstDateOfPage+7*i+j-lastMonthEndDate,isThisMonth:true,isToday:false};
  }
}
else {
  if(year == new Date().getFullYear() && month == new Date().getMonth()){
    return {date:firstDateOfPage+7*i+j-lastMonthEndDate-endDateOfMonth,isThisMonth:false,isToday:true};
  }
  else {
    return {date:firstDateOfPage+7*i+j-lastMonthEndDate-endDateOfMonth,isThisMonth:false,isToday:false};
  }
}
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

const style = (day:{date:number,isThisMonth:boolean,isToday:boolean}) => (
  <td css={css`
  color:${day.isThisMonth ? Pallet.Black:Pallet.Gray};
  background-color:${day.date === new Date().getDate() && day.isToday ? Pallet.Red:Pallet.White};
  `}>{day.date}</td>
)

const today = new Date();

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
          {style(Week.Sunday)}
          {style(Week.Monday)}
          {style(Week.Tuesday)}
          {style(Week.Wednesday)}
          {style(Week.Thursday)}
          {style(Week.Friday)}
          {style(Week.Saturday)}
        </tr>)
        }
      </table>
    </div>
  )
}

export default Calender;
