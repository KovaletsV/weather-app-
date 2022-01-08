import React from 'react';
import Weather from './components/Weather';

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <Weather defaultCity="Kyiv" />
            </div>
        </div>
    );
}
