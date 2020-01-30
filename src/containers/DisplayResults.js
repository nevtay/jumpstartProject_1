import React from "react"

class DisplayResults extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tdee: 0,
        }
    }

    render() {
        
        let { gender, age, heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, activityLevel } = this.props.personalInfo;

        
        const calculateBMI = () => {
            if ( heightInCm === 0 || weightInKg === 0 ) {
                return 0;
            }
            let weightFactor = Number(weightInKg);
            let heightInMetres = Number(heightInCm) / 100;
            let result = weightFactor / (Math.pow(heightInMetres, 2));
            return result.toFixed(2)
        }
        
        const calculateBMR = () => {
            if ( age === 0 || gender === '' || age === '' || heightInCm === 0 || weightInKg === 0 ) {
                return 0;
            }
                let weightFactor = Number(weightInKg) * 10;
                let heightFactor = Number(heightInCm) * 6.25;
                let ageFactor = Number(age) * 5;
                let genderFactor = gender === "male" ? 5 : -161; 
                let result = weightFactor + heightFactor - ageFactor + genderFactor 
            return result.toFixed(2)
        }

        const calculateTDEE = () => {
            let BMR = calculateBMR();
            let result = Math.floor(BMR * activityLevel)
            return result
        }
        
           
        return(
            
            <section className="tdee-results">
                
                <h1>Results</h1>
                <h2>BMI: {calculateBMI()}</h2>
                <h2>BMR: {calculateBMR()} calories a day</h2>
                <h2>TDEE: {calculateTDEE()} calories a day</h2>
                
            </section>

            
            )
    }
    
}

export default DisplayResults;