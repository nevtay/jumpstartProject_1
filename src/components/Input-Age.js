import React from "react"

class InputAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
        }
    }

    updateAge = (e) => {
        this.props.ageUpdate(e.target.value);
        this.setState({
            age: e.target.value
        })
    }

render() {

    return(
        <fieldset id="age">
            <p>Enter Age</p>
            <label 
            for="age" 
            className="tdee-inputs__label" 
            id="inputs-age"> Age </label>
                <input 
                type="number" 
                value={this.state.age} 
                onChange={this.updateAge} />
        </fieldset>
        )
    }
}

export default InputAge;