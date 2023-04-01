import React, { useState, useEffect } from "react";

function Timer({ hours, minutes, seconds, color, size }) {
    const [remainingTime, setRemainingTime] = useState({
        hours: hours,
        minutes: minutes,
        seconds: seconds
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(prevState => {
                let { hours, minutes, seconds } = prevState;

                if (seconds === 0) {
                    if (minutes === 0) {
                        if (hours === 0) {
                            clearInterval(intervalId);
                            return prevState;
                        }
                        hours--;
                        minutes = 59;
                        seconds = 59;
                    } else {
                        minutes--;
                        seconds = 59;
                    }
                } else {
                    seconds--;
                }

                return { hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);



    return (
        <div className={`text-${color} text-${size}`}>
            <span className="ml-1">{remainingTime.hours.toString().padStart(2, "0")}</span>h
            <span className="ml-1">{remainingTime.minutes.toString().padStart(2, "0")}</span>m
            <span className="ml-1">{remainingTime.seconds.toString().padStart(2, "0")}</span>s
        </div>
    );
}

export default Timer;
