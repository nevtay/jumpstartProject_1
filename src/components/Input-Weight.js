import React from "react"


class InputWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weightInKg: 0,
            weightInLbs: 0,
        }
    }

    inputsToIgnore = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length >= 3) {
            e.preventDefault();
        } 
    }

    setWeightInKg = (e) => {
        this.props.setWeightInKg(e.target.value);
        this.setState({
            weightInKg: e.target.value,
        })
    };

    setWeightInLbs = (e) => {
        this.props.setWeightInLbs(e.target.value);
        this.setState({
            weightInLbs: e.target.value,
        })
    };

render() {

    const measuringUnitToUse = this.props.setMeasuringUnit;
    let showKg;
    let showLbs;

    if (measuringUnitToUse === "metric") {
        
        showLbs = '';
        showKg = <input 
        type="number" 
        value={this.state.weight} 
        onChange={this.setWeightInKg}
        onKeyPress={this.inputsToIgnore}
         />

    } else {
        
        showKg = '';
        showLbs = <input 
        type="number" 
        value={this.state.weight} 
        onChange={this.setWeightInLbs}
        onKeyPress={this.inputsToIgnore}
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