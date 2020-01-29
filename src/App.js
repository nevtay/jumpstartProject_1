import React from 'react';
import './App.css';
import Header from "./components/Header"
import CalcInputs from "./containers/InputsForCalculator"

function App() {
  return (   
    
    <div className="App">

      <Header />      
      <CalcInputs />

    </div>
  );
}

export default App;
