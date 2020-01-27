import React from "react"

class InputWeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: '',
        }
    }

    updateWeight = (e) => {
        this.setState({
            weight: e.target.value
        })
        console.log(this.state.weight)
    }

render() {

    return(
        <fieldset id="weight">
            <p>Enter Weight</p>
            <label for="weight" className="tdee-inputs__label"> Weight </label>
                <input type="number" value={this.state.weight} onChange={this.updateWeight} />
        </fieldset>
        )
    }
}

export default InputWeight;