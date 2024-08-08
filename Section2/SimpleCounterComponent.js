import React, { useState } from 'react';

function Counter() {
    // Initialize the state variable 'count' with an initial value of 0
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={increment} style={{ marginRight: '10px' }}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}

export default Counter;