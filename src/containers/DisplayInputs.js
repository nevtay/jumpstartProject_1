import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"
import ToggleSwitch from "../components/ToggleMeasuringUnits"
import "./InputsForCalculator.css"
import DisplayResults from "./DisplayResults"

class DisplayInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: 0,
            heightInCm: 0,
            heightInFeet: 0,
            heightInInches: 0,
            weightInKg: 0,
            weightInLbs: 0,
            activityLevel: '',
            unitType: 'metric',
        }
    }

    setGender = gender => {
        this.setState({
            gender: gender,
        })
    }

    setAge = age => {
        this.setState({
            age: age,
        })
    }

    setHeightInCm = height => {
        this.setState({
            heightInCm: height,
        })
    }

    setHeightInFeet = height => {
        this.setState({
            heightInFeet: height,
        })
    }

    setHeightInInches = height => {
        this.setState({
            heightInInches: height,
        })
    }

    setWeightInKg = weight => {
        this.setState({
            weightInKg: weight,
        })
    }

    setWeightInLbs = weight => {
        this.setState({
            weightInLbs: weight,
        })
    }

    setActivityLevel = activityLevel => {
        this.setState({
            activityLevel: activityLevel,
        })
    }

    setMeasuringUnit = () => {
        if (this.state.unitType === 'metric') {
            this.setState({
                age: 0,
                heightInCm: 0,
                heightInFeet: 0,
                heightInInches: 0,
                weightInKg: 0,
                weightInLbs: 0,
                unitType: 'imperial'
                
            })
        } else {
        if (this.state.unitType === 'imperial') {
            this.setState({
                age: 0,
                heightInCm: 0,
                heightInFeet: 0,
                heightInInches: 0,
                weightInKg: 0,
                weightInLbs: 0,
                unitType: 'metric'
            })   
        }
    }
}
    
    resetInputFields = () => {
        this.setState({
            gender: '',
            age: 0,
            heightInCm: 0,
            heightInFeet: 0,
            heightInInches: 0,
            weightInKg: 0,
            weightInLbs: 0,
        })
    }

    render() {

        // let heightInCm;
        // let heightInFeet;
        // let heightInInches;
        // let weightInKg;
        // let weightInLbs;


        return (
            
            <section className="tdee-container">
                
                    <form className="tdee-inputs">
                
                        <ToggleSwitch unitType={this.setMeasuringUnit} />
                        <p>CURRENT UNIT TYPE: {this.state.unitType}</p>

                        <InputGender setGender={this.setGender} />

                        <InputAge setAge={this.setAge} />

                        <InputHeight 
                        setHeightInCm={this.setHeightInCm}
                        setHeightInFeet={this.setHeightInFeet} 
                        setHeightInInches={this.setHeightInInches} 
                        setMeasuringUnit={this.state.unitType} />

                        <InputWeight setWeightInKg={this.setWeightInKg} setWeightInLbs={this.setWeightInLbs} setWeightInInches={this.setWeightInInches} setMeasuringUnit={this.state.unitType} />

                        <InputActivityLevel setActivityLevel={this.setActivityLevel} />

                        <input 
                        style={{width: "150px", margin: 'auto'}} 
                        type="reset"
                        value="Reset All Fields"
                        onClick={this.resetInputFields}
                        />

                        
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
                        {console.log(this.state)}

                </form>

                <DisplayResults personalInfo={{ ...this.state }} /> 

            </section>
        )
    }
    
}

 export default DisplayInputs;