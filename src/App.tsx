import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="App">
      <h1>Olá mundo!</h1>
      <PomodoroTimer defaultPomodoroTime={1500} />
    </div>
  );
}

export default App;
