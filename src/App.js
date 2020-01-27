import React from 'react';
import './App.css';
import Header from "./components/header"
import CalcInputs from "./containers/inputsForCalculator"

function App() {
  return (   
    
    <div className="App">

      <Header />      

      <CalcInputs />

      <section className="tdee-results">
        <h2 className="tdee-results__title">Based on the input provided, your measurements are as follows: </h2>
        <div className="tdee-resultsSubcontainer">
          <h3 className="tdee-resultsSubcontainer__title">TDEE:</h3>
        </div>
        <div>
          <h3 className="tdee-resultsSubcontainer__title">BMI:</h3>
        </div>
        <div>
          <h3 className="tdee-resultsSubcontainer__title">BMR:</h3>
        </div>
      </section>

    </div>
  );
}

export default App;
