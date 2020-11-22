import React from 'react'
import './App.css';
import Login from './components/Login'

const App:React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>宇宙からの呟きを待つんや.</h1>
        <Login />
      </header>
    </div>
  );
}

export default App;
