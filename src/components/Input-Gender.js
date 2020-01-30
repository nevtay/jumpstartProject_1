import React from "react"

class InputGender extends React.Component {

    genderOfUser = (e) => {
        this.props.setGender(e.target.value);
    }

render() {
    return(
        <fieldset id="gender">

        <p>Select Biological Gender</p>
            
            <input 
            type="radio" 
            name="gender" 
            id="male"
            onChange={this.genderOfUser} 
            value="male" /> 
                <label className="tdee-inputs__label" htmlFor="male">Male</label>
            
            <input 
            type="radio" 
            name="gender" 
            id="female" 
            onChange={this.genderOfUser} 
            value="female" />
                <label className="tdee-inputs__label"  htmlFor="female">Female</label>

        </fieldset>
        )
    }
}

export default InputGender;