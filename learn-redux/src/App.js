import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useSelector} from 'react-redux'

function App() {
  const counter = useSelector(state => state.counter)
  return (
    <div className="App">
<h1>Total:{counter}</h1>
    </div>
  );
}

export default App;
