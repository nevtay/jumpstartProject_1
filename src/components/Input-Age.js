import React from "react"

class InputAge extends React.Component {

    inputsToIgnore = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === '0' || e.target.value.length >= 3) {
            e.preventDefault();
        } 
    }

    ifInputExceedsAge = (e) => {
        if (e.target.value > 130) {
            e.target.value = 130;
        } else {
            if (e.target.value < 0) {
                e.target.value = 0;
            } 
        }
    }

render() {

    return(
        <fieldset id="age">

            <label 
            htmlFor="age" 
            className="tdee-inputs__label" 
            id="inputs-age"> 
            Age (max age: 130)
            </label>

            <input 
            type="number" 
            value={this.props.age} 
            onChange={this.props.setAge}
            onKeyPress={this.inputsToIgnore}
            onBlur={this.ifInputExceedsAge}
            placeholder="age is just a number"
            />

        </fieldset>
        )
    }
}

export default InputAge;