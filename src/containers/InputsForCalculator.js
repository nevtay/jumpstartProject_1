import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"

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

    genderUpdate = (gender) => {
        this.setState({
            gender: gender,
        })
    }

    ageUpdate = (age) => {
        this.setState({
            age: age,
        })
    }

    heightUpdate = (height) => {
        this.setState({
            height: height,
        })
    }

    weightUpdate = (weight) => {
        this.setState({
            weight: weight,
        })
    }

    render() {
        return (
            <section className="tdee-inputs">
                <form onChange={console.log(this.state)}>

                <InputGender genderUpdate={this.genderUpdate} />
                <h1>Gender is {this.state.gender}</h1>

                <InputAge ageUpdate={this.ageUpdate} />
                <h1>Age is {this.state.age} years old</h1>

                <InputHeight heightUpdate={this.heightUpdate} />
                <h1>Height is {this.state.height}cm</h1>

                <InputWeight weightUpdate={this.weightUpdate} />
                <h1>Weight is {this.state.weight}kg</h1>

                <InputActivityLevel />
                <h1>Activity level is {this.state.weight}</h1>

                </form>

            </section>
        )
    }
    
}

 export default CalcInputs;