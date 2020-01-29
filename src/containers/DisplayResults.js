import React from "react"

const DisplayResults = ({ personalInfo }) => {
    let { gender, age, height, weight, activityLevel } = personalInfo ;

    const calculateBMR = () => {
        if ( gender === '' || age === '' || height === '' || weight === '' ) {
            return 0;
        }
            let weightFactor = Number(weight) * 10;
            let heightFactor = Number(height) * 6.25;
            let ageFactor = Number(age) * 5;
            let genderFactor = gender === "male" ? 5 : -161; 
            let result = weightFactor + heightFactor - ageFactor + genderFactor
        return result.toFixed(2);
    }
    
    const calculateBMI = () => {
        if ( height === '' || weight === '' ) {
            return 0;
        }
            let weightFactor = Number(weight);
            let heightInMetres = Number(height) / 100;
            let result = weightFactor / (Math.pow(heightInMetres, 2));
        return result.toFixed(2);
    }    
    
    
    return(
        <section className="tdee-results">
            
            <h1>Hello</h1>
            <h2>BMR: {calculateBMR()}</h2>
            <h2>BMI: {calculateBMI()}</h2>

        </section>
        )
    }

export default DisplayResults;