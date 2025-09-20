import {useState} from "react";

// If the timer variable is defined here , it will be shared across different
// timerchallenge components , so different components will redefine it
let timer;

export default function TimerChallenge({ title, targetTime }) {

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);


    function handleStart() {
        setTimerStarted(true);
        timer = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer)
        setTimerStarted(false);
    }

    return (
        <section className="challenge">
            <h2>{title}</h2>
            {timerExpired && (
                <p>You lost!</p>
            )}
            <p className="challenge-time">
                {targetTime} second {targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button
                    onClick={timerStarted ? handleStop: handleStart}
                >
                    {timerStarted ? 'Stop' : 'Start'} Challenge
                </button>
            </p>
            <p className={timerStarted ? 'active' : null }>
                {timerStarted ? 'Timer is running ..' : 'Timer InActive'}
            </p>
        </section>
    );
}