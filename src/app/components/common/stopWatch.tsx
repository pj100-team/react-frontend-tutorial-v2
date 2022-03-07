import { useEffect, useRef, useState } from "react";

const StopWatch : React.FC = () => {
  const[seconds,setSeconds] = useState(0);
  const refSeconds = useRef(seconds);
  useEffect(() => {
    refSeconds.current = seconds;
  },[seconds]);
  const intervalRef:any = useRef(null);
  const start = () => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000)
  };
  const stop = () => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const clear = () => setSeconds(0);
  return(
    <>
    <div >{seconds}</div>
    <button onClick={start}>スタート</button>
    <button onClick={stop}>ストップ</button>
    <button onClick={clear}>クリア</button>
    </>
  )
}

export default StopWatch;