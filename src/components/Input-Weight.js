import React from "react"


class InputWeight extends React.Component {

    inputsToIgnore = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 3) {
            e.preventDefault();
        } 
    }

render() {

    const measuringUnitToUse = this.props.setMeasuringUnit;
    let showKg;
    let showLbs;

    if (measuringUnitToUse === "metric") {
        
        showLbs = '';
        showKg = <input 
        type="number" 
        value={this.props.weightInKg} 
        onChange={this.props.setWeightInKg}
        onKeyPress={this.inputsToIgnore}
        placeholder="kg"
         />

    } else {
        
        showKg = '';
        showLbs = <input 
        type="number" 
        value={this.props.weightInLbs} 
        onChange={this.props.setWeightInLbs}
        onKeyPress={this.inputsToIgnore}
        placeholder="lbs"
        />

    }

    return(
        <fieldset id="weight">
           
            <label 
            htmlFor="weight" 
            className="tdee-inputs__label"
            > 
            {this.props.setMeasuringUnit === "metric" ? "Weight (kg)" : "Weight (lbs)"}&nbsp;
            </label>

            {showKg}
            {showLbs}

        </fieldset>
        )
    }
}

export default InputWeight;