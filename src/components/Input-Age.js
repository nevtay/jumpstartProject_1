import React from "react"

class InputAge extends React.Component {

    inputsToIgnore = (e) => {
        let maxInputLength = 2;
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value.length > maxInputLength) {
            e.preventDefault();
        } 
        if (e.target.value > 130) {
            e.target.value = "130";
        } 
    }
    
    setAge = (e) => {
            this.props.setAge(e.target.value);
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

                <br />

            <input 
            type="number" 
            value={this.props.age} 
            onChange={this.setAge}
            onKeyPress={this.inputsToIgnore} />

        </fieldset>
        )
    }
}

export default InputAge;