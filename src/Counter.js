import { useState } from 'react';

export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
            }}>Increment</button>

            <h1>{number}</h1>
            <button onClick={() => {
                setTimeout(() => {
                    setNumber(number + 1);
                }, 2000);
            }}>Increment After Delay</button>

            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number + 1);
                setNumber(number + 1);
            }}>Increment Twice</button>

            <h1>{number}</h1>
            <button onClick={() => {
                setNumber(number => number + 1);
                setNumber(number => number + 1);
            }}>Correct Increment Twice</button>
        </>
    )
}
