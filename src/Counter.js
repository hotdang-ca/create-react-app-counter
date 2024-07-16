import React from 'react';
import './counter.css';

function Counter() {
    const [ count, setCount ] = React.useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    return <>
    <div className="container">
        <div className="header">
            <h1>React Counter App</h1>
        </div>
        
        <div className="counter-label">
            <span className="counter">
                {count}
            </span>
        </div>
    
        <div className="controls">
            <button onClick={increment}>
                +
            </button>
            <button onClick={decrement}>
                -
            </button>
        </div>
    </div>
    </>;
}

export default Counter;