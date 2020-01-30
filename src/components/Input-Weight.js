import React from "react"


class InputWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
        }
    }

    setWeight = (e) => {
        const maxInputLength = 4;
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length > maxInputLength) {
            e.preventDefault();
            return;
        } 
        this.props.setWeight(e.target.value);
        this.setState({
            weight: e.target.value,
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
        onChange={this.setWeight}
        onKeyPress={this.setWeight}
         />
    } else {
        showKg = '';
        showLbs = <input 
        type="number" 
        value={this.state.weight} 
        onChange={this.setWeight}
        onKeyPress={this.setWeight}
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