import React from "react"

class InputHeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
        }
    }

    updateHeight = (e) => {
        this.props.heightUpdate(e.target.value);
        this.setState({
            height: e.target.value
        })
    }

render() {

    return(
        <fieldset id="height">
            <label for="height" className="tdee-inputs__label"> Height </label>
                <input id="inputs-height" type="number" value={this.state.height} onChange={this.updateHeight} />
        </fieldset>
        )
    }
}

export default InputHeight;