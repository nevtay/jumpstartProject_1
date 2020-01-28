import React from 'react';
import './App.css';
import Header from "./components/Header"
import CalcInputs from "./containers/InputsForCalculator"
import DisplayResults from "./containers/DisplayResults"

function App() {
  return (   
    
    <div className="App">

      <Header />      
      <CalcInputs />
      <DisplayResults />

    </div>
  );
}

export default App;
