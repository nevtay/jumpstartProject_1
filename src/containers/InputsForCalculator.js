import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"
import "./InputsForCalculator.css"

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
        
    const calculateBMR = () => {
        let { gender, age, height, weight, activityLevel } = this.state;
        console.log(gender, age, height, weight, activityLevel);
    }

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
                        <span className={this.state.age > 130 ? "revealed" : "hidden"}>Age </span>

                    <InputHeight heightUpdate={this.heightUpdate} />

                    <InputWeight weightUpdate={this.weightUpdate} />

                    <InputActivityLevel activityLevelUpdate={this.activityLevelUpdate} />

                </form>

            <section className="tdee-results">
                <h1>
                    Gender is 
                    { this.state.gender === '' ? " UNKNOWN " : ` ${this.state.gender} `}
                    </h1>
                    <h1>
                        { ageLimit(this.state.age) } 
                    </h1>
                    <h1>
                        Height is 
                        { this.state.height === '' ? ` 0 ` : ` ${this.state.height} ` }cm
                        </h1>
                    <h1>
                        Weight is 
                        { this.state.weight === '' ? ` 0 ` : ` ${this.state.weight} ` }kg
                        </h1>
                    <h1>Activity level is { this.state.activityLevel === '' ? " UNKNOWN " : ` ${this.state.activityLevel.toUpperCase()} ` }</h1>
            </section>
                {calculateBMR()};
            
            </section>
        )
    }
    
}

 export default CalcInputs;