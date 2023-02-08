import "./CalendarDay.css";
interface calendarDay {
  isYear: number;
  isMonth: number;
}

export const CalendarDay = (props: calendarDay) => {
  const { isYear, isMonth } = props;

  let firstDate = new Date(isYear, isMonth - 1, 1);

  // 今日が何日かを取得
  let nowYear = new Date().getFullYear();
  let nowMonth = new Date().getMonth() - 1;
  let today = new Date().getDate();

  // 月の最初に前の月の最後の日付を表示する
  let firstMonthDays: number[] = [];
  for (let i = firstDate.getDay(); i < 7; i++) {
    firstMonthDays.push(i - firstDate.getDay() + 1);
  }

  const lastEndMonth = new Date(
    firstDate.getFullYear(),
    firstDate.getMonth(),
    0
  );
  let prevMonthDays: number[] = [];

  for (let i = 0; i < firstDate.getDay(); i++) {
    prevMonthDays.unshift(lastEndMonth.getDate() - i);
  }

  // 当月の日付を表示する
  let middleMonthDays: number[] = [];

  let lastDay = new Date(isYear, firstDate.getMonth() + 1, 0).getDate();
  for (
    let i = prevMonthDays.length + firstMonthDays.length;
    i <= lastDay;
    i++
  ) {
    middleMonthDays.push(i);
  }

  // 当月の日付のみの配列を生成
  let monthDays = [...firstMonthDays, ...middleMonthDays];

  // 月の最後に次の月の最初の日付を表示する
  let nextMonthDays: number[] = [];

  const nextDay =
    35 -
    (firstMonthDays.length + middleMonthDays.length + prevMonthDays.length);
  if (nextDay >= 0) {
    for (let i = 1; i <= nextDay; i++) {
      nextMonthDays.push(i);
    }
  } else {
    for (let i = 1; i <= 7 + nextDay; i++) {
      nextMonthDays.push(i);
    }
  }

  // 曜日を定義
  const Aweek: string[] = ["日", "月", "火", "水", "木", "金", "土"];

  return (
    <div className="flex">
      {Aweek.map((week: string) => (
        <div key={week} className="square week">
          <p>{week}</p>
        </div>
      ))}
      {prevMonthDays.map((day: number, index) => (
        <div key={index} className="square otherDays">
          <p>{day}</p>
        </div>
      ))}
      {monthDays.map((day: number, index) => (
        <div
          key={index}
          className="square"
          style={
            day === today && isYear === nowYear && isMonth - 1 === nowMonth + 1
              ? { backgroundColor: "#ff6969" }
              : { backgroundColor: "#fff" }
          }
        >
          <p>{day}</p>
        </div>
      ))}
      {nextMonthDays.map((day: number, index) => (
        <div key={index} className="square otherDays">
          <p>{day}</p>
        </div>
      ))}
    </div>
  );
};
