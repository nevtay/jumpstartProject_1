import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"
import "./InputsForCalculator.css"
import DisplayResults from "./DisplayResults"

class CalcInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: '',
            age: '',
            height: '',
            weight: '',
            activityLevel: '',
        }
    }

    genderUpdate = gender => {
        this.setState({
            gender: gender,
        })
    }

    ageUpdate = age => {
        this.setState({
            age: age,
        })
    }

    heightUpdate = height => {
        this.setState({
            height: height,
        })
    }

    weightUpdate = weight => {
        this.setState({
            weight: weight,
        })
    }

    activityLevelUpdate = activityLevel => {
        this.setState({
            activityLevel: activityLevel,
        })
    }

    render() {
        
    let { gender = '', age = 0, height = 0, weight = 0 } = this.state;

    // const calculateBMR = () => {
    //     if ( gender === '' || age === '' || height === '' || weight === '' ) {
    //         return 0;
    //     }
    //         let weightFactor = Number(weight) * 10;
    //         let heightFactor = Number(height) * 6.25;
    //         let ageFactor = Number(age) * 5;
    //         let genderFactor = gender === "male" ? 5 : -161; 
    //         let result = (weightFactor + heightFactor - ageFactor + genderFactor)
    //     return result.toFixed(2);
    // }
    // const calculateBMI = () => {
    //     if ( height === '' || weight === '' ) {
    //         return 0;
    //     }
    //         let weightFactor = Number(weight);
    //         let heightInMetres = Number(height) / 100;
    //         let result = weightFactor / Math.pow(heightInMetres, 2);
    //     return parseInt(result);
    // }

    const ageLimit = age => {
        age = Number(age);
        const maxAge = 130;
        if (age === 0) {
            return ` 0 years old.`;
        }
        if (age < 0) {
            return ` Error: ${this.state.age} is an invalid age.`
        }
        if (age > maxAge) {
            return ``
        }
        return Math.round(age);
    }
        return (
            
            <section className="tdee-container">
                
                <form className="tdee-inputs">

                    <InputGender genderUpdate={this.genderUpdate} />

                    <InputAge ageUpdate={this.ageUpdate} />
                        <span className={this.state.age > 130 ? "age-warning" : "hidden"}>Age limit exceeded.</span>

                    <InputHeight heightUpdate={this.heightUpdate} />

                    <InputWeight weightUpdate={this.weightUpdate} />

                    <InputActivityLevel activityLevelUpdate={this.activityLevelUpdate} />

                    <p>Note: For BMR, fill in all fields to see your results!</p>

                </form>

                <DisplayResults personalInfo={ {...this.state} } /> 

            </section>
        )
    }
    
}

 export default CalcInputs;