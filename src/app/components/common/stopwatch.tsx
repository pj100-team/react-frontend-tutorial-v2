/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval: any;
        if (isRunning) {
            interval = setInterval (() => {
                setTime(time+1)
            }, 1000);
        }
        return () => {clearInterval(interval);};
    }, [isRunning, time]);

    return(
        <div>
            <p
                css={css`
                text-align: center;
                color: black;
                font-size: 60px;
            `}
            >
                {time}
            </p>
            <div
                css={css`
                    display: flex;
                    justify-content: center;
                    margin: 20px;
                    border: none;
                    padding: 10px 30px;
                    cursor: pointer;
                `}
            >
                <button
                    css={css`
                        background-color: #dfebeb;
                        color: black;
                    `}
                    onClick={()=>{setIsRunning(!isRunning)}}>
                        {isRunning ? "ストップ" : "スタート"}
                </button>
                <button
                    css={css`
                        background-color: black;
                        color: #dfebeb;
                    `}
                    onClick={()=>{setTime(0)}}>
                        リセット
                </button>
            </div>
        </div>
    )
};

export default StopWatch;