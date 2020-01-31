import React from "react"
import convert from 'convert-units';

class DisplayResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tdee: 0,
        }
    }

    render() {

        let { gender, age, heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, activityLevel, unitType } = this.props.personalInfo;

        console.log(heightInFeet, heightInInches, weightInLbs);

        let calculateBMI;
        let calculateBMR;
        let calculateTDEE;
        let messageBMI;

        if (unitType === 'metric') {
        calculateBMI = () => {
            if ( Boolean(heightInCm) === false || Boolean(weightInKg) === false ) {
                return 0;
            }
            let weightFactor = Number(weightInKg);
            let heightInMetres = Number(heightInCm) / 100;
            let result = weightFactor / (Math.pow(heightInMetres, 2));
            return result.toFixed(2)
        }
        
        calculateBMR = () => {
            if ( Boolean(age) === false || Boolean(gender) === false  || Boolean(heightInCm) === false || Boolean(weightInKg) === false ) {
                return 0;
            }
                let weightFactor = Number(weightInKg) * 10;
                let heightFactor = Number(heightInCm) * 6.25;
                let ageFactor = Number(age) * 5;
                let genderFactor = gender === "male" ? 5 : -161; 
                let result = weightFactor + heightFactor - ageFactor + genderFactor 
            return result.toFixed(2)
        }

        calculateTDEE = () => {
            let BMR = calculateBMR();
            let result = Math.floor(BMR * activityLevel)
            return result;
        }} else {

        if (unitType === 'imperial') {
            calculateBMI = () => {
                if ( Boolean(heightInFeet) === false || Boolean(heightInInches) === false || Boolean(weightInLbs) === false ) {
                    return 0;
                }
                let weightFactor = convert(Number(weightInLbs)).from('lb').to('lb');
                let feetToInches = convert(Number(heightInFeet)).from('ft').to('in');
                let totalHeightInInches = Number(heightInInches) + feetToInches;
                let result = weightFactor / (Math.pow(totalHeightInInches, 2)) * 703;
                return result.toFixed(2)
            }

            calculateBMR = () => {
                if ( Boolean(age) === false || Boolean(gender) === false  || Boolean(heightInFeet) === false || Boolean(heightInInches) === false || Boolean(weightInLbs) === false ) {
                    return 0;
                }
                    let weightFactor = Number(weightInLbs) * 10;
                    let feetToInches = convert(Number(heightInFeet)).from('ft').to('in');
                    let totalHeightInInches = Number(heightInInches) + feetToInches;
                    let ageFactor = Number(age) * 5;
                    let genderFactor = gender === "male" ? 5 : -161; 
                    let result = weightFactor + totalHeightInInches - ageFactor + genderFactor 
                return result.toFixed(2);
            }
    
            calculateTDEE = () => {
                let BMR = calculateBMR();
                let result = Math.floor(BMR * activityLevel)
                return result;
            }
    }}

    messageBMI = (bmiFn) => {
        if (bmiFn === 0) {
            return;
        }
        if (bmiFn < 18.5) {
            return "Underweight! A healthy BMI is between 18.5 and 25.";
        }
        if (bmiFn >= 18.5 && bmiFn <= 25) {
            return "You're healthy!";
        }
        if (bmiFn > 25 && bmiFn <= 29.9) {
            return "Overweight! A healthy BMI is between 18.5 and 25.";
        }
        if (bmiFn > 30) {
            return <span>Very overweight! Please contact <b>Valerie</b> for HIIT training.</span>
        }
    }
        
           
        return(
            
            <section className="tdee-results">
                
                <h1>Results</h1>
                <h2>BMI: {calculateBMI()}</h2>
                <p>{messageBMI()}</p>
                <span>{messageBMI(calculateBMI())}</span>
                <h2>BMR: {calculateBMR()} calories a day</h2>
                <h2>TDEE: {calculateTDEE()} calories a day</h2>
                {/* {console.log(this.props.personalInfo)} */}
                
            </section>

            
            )
    }
    
}

export default DisplayResults;