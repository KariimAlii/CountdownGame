import {useRef, useState} from "react";



export default function TimerChallenge({ title, targetTime }) {

    // refs will not be lost or redefined when the TimerChallenge component re-executes
    const timer = useRef(null);

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);


    function handleStart() {
        setTimerStarted(true);
        timer.current = setTimeout(() => {
            setTimerExpired(true);
        }, targetTime * 1000);
    }

    function handleStop() {
        clearTimeout(timer.current)
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