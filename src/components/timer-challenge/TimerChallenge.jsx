import {useState} from "react";

export default function TimerChallenge({ title, targetTime }) {

    const [timerExpired, setTimerExpired] = useState(false);
    const [timerStarted, setTimerStarted] = useState(false);

    // The timer is not stopped , everytime the state changes
    // the component function is re-executed and timer variable is re-defined
    let timer;
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