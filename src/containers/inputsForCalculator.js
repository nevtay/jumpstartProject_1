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

    weightUpdate = (weight) => {
        this.setState({
            weight: weight,
        })
    }

    render() {
        return (
            <section className="tdee-inputs">
                <form>
                
                <InputGender />
                <h1>Gender is {this.state.weight}</h1>

                <InputAge />
                <h1>Age is {this.state.weight}</h1>

                <InputHeight />
                <h1>Height is {this.state.weight}</h1>

                <InputWeight weightUpdate={this.weightUpdate}/>
                <h1>Weight is {this.state.weight}</h1>
                
                <InputActivityLevel />
                <h1>Activity level is {this.state.weight}</h1>

                </form>

            </section>
        )
    }
    
}

 export default CalcInputs;