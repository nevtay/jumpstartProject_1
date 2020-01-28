import React from "react"

class InputGender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gender: '',
        }
    }

    genderOfUser = (e) => {
        this.props.genderUpdate(e.target.value);
        this.setState({
            gender: e.target.value,
        })
    }

render() {
    return(
        <fieldset id="gender">
        <p>Select Gender</p>
            <input 
            type="radio" 
            name="gender" 
            id="male" y
            onChange={this.genderOfUser} 
            value="male" />
                <label className="tdee-inputs__label" for="male">Male</label>
            <input 
            type="radio" 
            name="gender" 
            id="female" 
            onChange={this.genderOfUser} 
            value="female" />
                <label className="tdee-inputs__label"  for="female">Female</label>
        </fieldset>
        )
    }
}

export default InputGender;