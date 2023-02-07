import { useRef, useState } from "react";
import "./StopWatch.css";

export const StopWatch: React.FC = () => {
  const [time, setTime] = useState<number>(0);

  let intervalId: any = useRef(null);
  const onClickStart = () => {
    if (intervalId.current !== null) {
      return;
    }
    intervalId.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const onClickStop = () => {
    if (intervalId.current === null) {
      return;
    }
    clearInterval(intervalId.current);
    intervalId.current = null;
  };

  const onClickReset = () => {
    clearInterval(intervalId.current);
    intervalId.current = null;
    setTime(0);
  };

  const hour = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minute = Math.floor(((time % (24 * 60 * 60)) % (60 * 60)) / 60);
  const second = ((time % (24 * 60 * 60)) % (60 * 60)) % 60;

  return (
    <div className="wrapper">
      <h3>
        {hour}時間{minute}分{second}秒
      </h3>
      <div>
        <button onClick={onClickStart}>スタート</button>
        <button onClick={onClickStop}>ストップ</button>
        <button onClick={onClickReset}>リセット</button>
      </div>
    </div>
  );
};
