import {useRef, useState} from "react";
import ResultModal from "../result-modal/ResultModal.jsx";



export default function TimerChallenge({ title, targetTime }) {

    // refs will not be lost or redefined when the TimerChallenge component re-executes
    // this ref is component-specific , and not shared between different components
    // so that 2 components can run timers at the same times with 2 different refs
    const timer = useRef(null);
    const dialog = useRef(null);

    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

    const isTimerActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

    if(timeRemaining <= 0) {
        clearInterval(timer.current);
        setTimeRemaining(targetTime * 1000);
        dialog.current.open();
    }
    function handleStart() {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }

    return (
        <>
            {<ResultModal ref={dialog} targetTime={targetTime} result="lost" />}
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second {targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button
                        onClick={isTimerActive ? handleStop : handleStart}
                    >
                        {isTimerActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={isTimerActive ? 'active' : null}>
                    {isTimerActive ? 'Timer is running ..' : 'Timer InActive'}
                </p>
            </section>
        </>

    );
}