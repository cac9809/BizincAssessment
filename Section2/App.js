import React from 'react';
import ReactDOM from 'react-dom';
import SimpleCounterComponent from './Section2';

function App() {
    return (
        <div>
            <SimpleCounterComponent />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));