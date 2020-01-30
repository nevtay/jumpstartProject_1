import React from "react"

class InputAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
        }
    }

    updateAge = (e) => {
        const maxInputLength = 3;
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length > maxInputLength) {
            e.preventDefault();
        } 
        if (e.target.value > 130) {
            e.target.value = "130";
        } 
            this.props.setAge(e.target.value);
            this.setState({
                age: e.target.value,
            })
        }    

render() {

    return(
        <fieldset id="age">
            
            <label 
            for="age" 
            className="tdee-inputs__label" 
            id="inputs-age"> 
            Age (max age: 130)
            </label>

                <br />

            <input 
            type="number" 
            value={this.state.age} 
            min="0"
            max="130"
            maxLength="3"
            onChange={(e) => this.updateAge(e)}
            onKeyPress={(e) => this.updateAge(e)} />

            {console.log(this.props)}
                
        </fieldset>
        )
    }
}

export default InputAge;