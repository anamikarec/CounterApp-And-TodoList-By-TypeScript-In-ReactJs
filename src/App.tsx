import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Counter } from './Components/Couter/Counter';
import Todo from "./Todo/Todo"
function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
    <Counter/>
    <Todo />
    </div>
  );
}

export default App;
