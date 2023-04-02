import React, { useState, useEffect } from "react";

function Timer({ endDate }) {

    const timer = endDate.toString()

    const futureDate = new Date(timer);

    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

    function getTimeRemaining() {
        const time = Date.parse(futureDate) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        return { total: time, days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeRemaining(getTimeRemaining());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    let timerDisplay = null;
    if (timeRemaining.total <= 0) {
        timerDisplay = <p>Bid Ended</p>;
    } else {
        timerDisplay = (
            <p>
                {timeRemaining.days}d {timeRemaining.hours}h,{" "}
                {timeRemaining.minutes}m {timeRemaining.seconds}s
            </p>
        );
    }

    return <div>{timerDisplay}</div>;
}

export default Timer;
