import { useState } from "react";
import { CalenderHead } from "../calendarHead/CalendarHead";
import { CalendarDay } from "../calendarDay/CalenderDay";

export const CalendarHome = () => {
  const today = new Date();
  const todayYear = today.getFullYear();
  const todayMonth = today.getMonth() + 1;
  const [isYear, setIsYear] = useState<number>(todayYear);
  const [isMonth, setIsMonth] = useState<number>(todayMonth);

  return (
    <>
      <CalenderHead
        isYear={isYear}
        setIsYear={setIsYear}
        isMonth={isMonth}
        setIsMonth={setIsMonth}
      />
      <CalendarDay isYear={isYear} isMonth={isMonth} />
    </>
  );
};
