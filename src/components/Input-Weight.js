import React from "react"

class InputWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
        }
    }

    updateWeight = (e) => {
        this.props.weightUpdate(e.target.value);
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
            Weight 
            </label>
                <input type="number" 
                value={this.state.weight} 
                onChange={this.updateWeight} />
        </fieldset>
        )
    }
}

export default InputWeight;