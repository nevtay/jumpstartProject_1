import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"
import ToggleMeasuringUnits from "../components/ToggleMeasuringUnits"
import "./InputsForCalculator.css"
import DisplayResults from "./DisplayResults"
import "./DisplayInputs.css"
import convert from 'convert-units'

class DisplayInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
            gender: '',
            heightInCm: '',
            heightInFeet: '',
            heightInInches: '',
            weightInKg: '',
            weightInLbs: '',
            activityLevel: '',
            unitType: 'metric'
        }
    }

    setGender = gender => {
        this.setState({
            gender: gender,
        })
    }

    setAge = e => {
        let ageToSet = e.target.value
        if (ageToSet >= 130) {
            e.preventDefault()
            e.target.value = 130
      } else {
          if (ageToSet < 0) {
              e.preventDefault()
              e.target.value = 0
          }
      }
        this.setState({
                age: e.target.value
        })
    }

    setHeightInCm = e => {
        let cmToinches = convert(e.target.value).from('cm').to('in');
        this.setState({
            heightInCm: e.target.value,
            heightInFeet: (cmToinches / 12).toFixed(0),
            heightInInches: (cmToinches % 12).toFixed(1)
        })
    }

    setHeightInFeet = e => {
        let inchesToCm = convert(this.state.heightInInches).from('in').to('cm');
        const feetToCm = (feet) => {
             return convert(feet)
             .from('ft')
             .to('cm');
        }
        if (e.target.value > 9) {
            this.setState({
                heightInFeet: 9,
                heightInCm: (inchesToCm + feetToCm(e.target.value)).toFixed(0)
        })
        } else if (e.target.value < 0) {
            this.setState({
                heightInFeet: 0,
                heightInCm: (inchesToCm + feetToCm(e.target.value)).toFixed(0)
        })
        } else {
            this.setState({
                heightInFeet: e.target.value,
                heightInCm: (inchesToCm + feetToCm(e.target.value)).toFixed(0)
        })
        }
    }

    setHeightInInches = e => {
        let feetToCm = convert(this.state.heightInFeet).from('ft').to('cm');
        const inchesToCm = (feet) => {
             return convert(feet)
             .from('in')
             .to('cm');
        }
        if (e.target.value > 11) {
            this.setState({
                heightInInches: 11,
                heightInCm: (feetToCm + inchesToCm(e.target.value)).toFixed(0)
        })
        } else if (e.target.value < 0) {
            this.setState({
                heightInInches: 0,
                heightInCm: (feetToCm + inchesToCm(e.target.value)).toFixed(0)
        })
        } else {
            this.setState({
                heightInInches: e.target.value,
                heightInCm: (feetToCm + inchesToCm(e.target.value)).toFixed(0)
        })
        }
    }

    setWeightInKg = e => {
        this.setState({
            weightInKg: e.target.value,
            weightInLbs: convert(e.target.value).from('kg').to('lb').toFixed(0)
        })
    }

    setWeightInLbs = e => {
        this.setState({
            weightInLbs: e.target.value,
            weightInKg: convert(e.target.value).from('lb').to('kg').toFixed(0)
        })
    }

    setActivityLevel = activityLevel => {
        this.setState({
            activityLevel: activityLevel,
        })
    }

    setMeasuringUnit = () => {
        if (this.state.unitType === 'imperial') {
            this.setState({
                unitType: 'metric',
            })
        } 
        if (this.state.unitType === 'metric') {
            this.setState({
                unitType: 'imperial',
            })   
        }
    }
    
    resetInputFields = () => {
        this.setState({
            gender: this.state.gender,
            age: '',
            heightInCm: '',
            heightInFeet: '',
            heightInInches: '',
            weightInKg: '',
            weightInLbs: '',
            unitType: 'metric',
        })
    }

    render() {


        return (
            
            <section data-testid="DisplayInputs" className="tdee-container">              
                <div className="tdee-container-inputs">
                    <form className="tdee-inputs">

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
                
                        <ToggleMeasuringUnits 
                        gender={this.state.gender}
                        currentUnitType={this.state.unitType}
                        toggleUnitType={this.setMeasuringUnit} 
                        />
                        <h3>CURRENT UNIT TYPE: {this.state.unitType.toUpperCase()}</h3>

                        <InputGender 
                        setGender={this.setGender} />

                        <InputAge 
                        age={this.age}
                        setAge={this.setAge} />

                        <InputHeight 
                        heightInCm={this.state.heightInCm}
                        heightInInches={this.state.heightInInches}
                        heightInFeet={this.state.heightInFeet}
                        setHeightInCm={this.setHeightInCm}
                        setHeightInFeet={this.setHeightInFeet} 
                        setHeightInInches={this.setHeightInInches} 
                        setMeasuringUnit={this.state.unitType} />

                        <InputWeight 
                        weightInKg={this.state.weightInKg}
                        weightInLbs={this.state.weightInLbs}
                        setWeightInKg={this.setWeightInKg} 
                        setWeightInLbs={this.setWeightInLbs} 
                        setMeasuringUnit={this.state.unitType} />

                        <InputActivityLevel setActivityLevel={this.setActivityLevel} />

                        <input 
                        style={{width: "150px", margin: 'auto'}} 
                        type="reset"
                        value="Reset All Fields"
                        defaultChecked={false}
                        onClick={this.resetInputFields}
                        onFocus={this.resetInputFields}
                        />                        
                        
                </form>
                </div>
                
                <div className="tdee-container-inputResults">
                    <DisplayResults personalInfo={{ ...this.state }} /> 
                </div>

            </section>
        )
    }
}

 export default DisplayInputs;