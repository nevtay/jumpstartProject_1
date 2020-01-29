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

                    <div style={{display:"flex", justifyContent:"center", flexFlow:"row wrap", margin:"auto"}}>

                    <div style={{width: "45%"}}>
                    <ul style={{display: "flex", flexFlow: "column wrap", alignItems: "flex-start", textAlign:"left"}}>
                    <h3><strong>Instructions!</strong></h3>
                        <li style={{listStyleType: "square", margin:"0"}}>BMI requires height and weight</li>
                        <li style={{listStyleType: "square", margin:"0"}}>BMR requires height, weight, age, and gender</li>
                        <li style={{listStyleType: "square", margin:"0",}}>TDEE requires all inputs to be filled and an option picked from the activity level box.</li>
                        </ul>
                    </div>
                    
                    <div style={{width: "45%"}}>
                    <ul style={{display: "flex", flexFlow: "column wrap", alignItems: "flex-start", textAlign:"left"}}>
                        <h3><strong>Definitions!</strong></h3>
                        <li style={{listStyleType: "square", margin:"0"}}>BMI: Body Mass Index</li>
                        <li style={{listStyleType: "square", margin:"0"}}>BMR: Basal Metabolic Rate</li>
                        <li style={{listStyleType: "square", margin:"0"}}>TDEE: Total Daily Energy Expenditure.</li>
                    </ul>
                    </div>

                    </div>

                </form>

                <DisplayResults personalInfo={{ ...this.state }} /> 

            </section>
        )
    }
    
}

 export default CalcInputs;