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

        return (
            
            <section className="tdee-container">
                
                <form className="tdee-inputs">

                    <InputGender genderUpdate={this.genderUpdate} />

                    <InputAge ageUpdate={this.ageUpdate} />

                    <InputHeight heightUpdate={this.heightUpdate} />

                    <InputWeight weightUpdate={this.weightUpdate} />

                    <InputActivityLevel activityLevelUpdate={this.activityLevelUpdate} />

                    <h2>Instructions!</h2>
                        <li>BMI requires height and weight</li>
                        <li>BMR requires height, weight, age, and gender</li>
                        <li>TDEE requires all inputs to be filled and an option picked from the dropdown box.</li>

                </form>

                <DisplayResults personalInfo={{ ...this.state }} /> 

            </section>
        )
    }
    
}

 export default CalcInputs;