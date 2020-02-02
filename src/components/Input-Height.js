import React from "react"

class InputHeight extends React.Component {
    inputsToIgnoreCm = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 3) {
            e.preventDefault();
        }
    } 

    inputsToIgnoreFeet = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 1) {
            e.preventDefault();
        } 
    }


    inputsToIgnoreInches = (e) => {
        if (e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length > 2 || e.target.value > 11) {
            e.preventDefault();
            return;
        }
    }

render() {
    const measuringUnitToUse = this.props.setMeasuringUnit;
    let showCentimetres;
    let showFeet;
    let showInches;

    if (measuringUnitToUse === "metric") {
        
        showFeet = '';

        showInches = '';

        showCentimetres = <input 
        id="inputs-height" 
        type="number"
        value={this.props.heightInCm}
        onChange={this.props.setHeightInCm}
        onKeyPress={this.inputsToIgnoreCm}
        placeholder="cm"
         /> 

    } 

    if (measuringUnitToUse === "imperial") {
        showCentimetres = '';

        showFeet = <input 
        type="number" 
        value={this.props.heightInFeet} 
        onChange={this.props.setHeightInFeet}
        onKeyPress={this.inputsToIgnoreFeet}
        onBlur={this.inputsToIgnoreFeet}
        placeholder="ft"
        />;
        
        showInches = <input 
        type="number" 
        value={this.props.heightInInches} 
        onChange={this.props.setHeightInInches}
        onKeyPress={this.inputsToIgnoreInches}
        onBlur={this.inchesInvalidValuesCheck}
        placeholder="inches" 
        />
    }

    return(
        <fieldset id="height">
           
            <label 
            htmlFor="height" 
            className="tdee-inputs__label"> 
            {this.props.setMeasuringUnit === "metric" ? "Height (cm)" : "Height (feet and inches)"}&nbsp;
            </label>

                {showCentimetres}
                {showFeet}
                {showInches}
                
            </fieldset>
            )
    } 
}

export default InputHeight;