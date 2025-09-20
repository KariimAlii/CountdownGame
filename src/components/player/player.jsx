import {useRef, useState} from "react";

export default function Player() {
    const refPlayerName = useRef(null);
    const [playerName, setPlayerName] = useState(null);

    function handleClick() {
        // refPlayerName.current  ---> Native Input Html Element
        setPlayerName(refPlayerName.current.value);
    }

    return (

        <section id="player">
            {/*<h2>Welcome {playerName ? playerName : 'unknown entity'}</h2>*/}
            <h2>Welcome {playerName ?? 'unknown entity'}</h2>
            <p>
                <input ref={refPlayerName} type="text" />
                <button onClick={handleClick}>Set Name</button>
            </p>
        </section>
    );
}
