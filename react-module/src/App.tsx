import React from 'react';
import './App.css';
import {TaskReactLogin} from "./tasks/react-login";

function App() {
    return (
        <div className="App">
            <header>React App</header>
            <main>
                <TaskReactLogin/>
            </main>
        </div>
    );
}

export default App;
