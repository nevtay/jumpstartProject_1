import React from "react"


class InputWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
        }
    }

    updateWeight = (e) => {
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

    return(
        <fieldset id="weight">
           
            <label 
            for="weight" 
            className="tdee-inputs__label"> 
            Weight (kg) &nbsp;
            </label>

                <input type="number" 
                value={this.state.weight} 
                onChange={this.updateWeight}
                onKeyPress={this.updateWeight}
                 />

        </fieldset>
        )
    }
}

export default InputWeight;