import React from "react"

class InputHeight extends React.Component {


    setHeightInCm = (e) => {
        this.props.setHeightInCm(e.target.value);
    }

    setHeightInFeet = (e) => {
        this.props.setHeightInFeet(e.target.value);
    }

    setHeightInInches = (e) => {
        this.props.setHeightInInches(e.target.value);
    }

    inputsToIgnoreCm = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 3) {
            e.preventDefault();
        } 
    }

    inputsToIgnoreFeet = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 1) {
            e.preventDefault();
            return;
        } 
    }

    inputsToIgnoreInches = (e) => {
        // const maxInputLength = 2;
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 2 || e.target.value >= 12) {
            e.preventDefault();
            return;
        }
        if (e.target.value > 12) {
            e.target.value = 12;
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
        // value={this.state.height} 
        onChange={this.setHeightInCm}
        onKeyPress={this.inputsToIgnoreCm}
        placeholder="cm"
         /> 

    } 

    if (measuringUnitToUse === "imperial") {
        showCentimetres = '';
        showFeet = <input 
        type="number" 
        value={this.props.heightInFeet} 
        onChange={this.setHeightInFeet}
        onKeyPress={this.inputsToIgnoreFeet}
        placeholder="ft"
        />;
        
        showInches = <input 
        type="number" 
        value={this.props.heightInInches} 
        onChange={this.setHeightInInches}
        onKeyPress={this.inputsToIgnoreInches}
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