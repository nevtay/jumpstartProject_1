import React from "react"

class InputAge extends React.Component {

    inputsToIgnore = (e) => {
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value.length === 3) {
            e.preventDefault();
        } 
    }

    ifInputExceedsMaxAge = (e) => {
        const maxAge = 130;
        return e.target.value > 130 ? e.target.value = maxAge : e.target.value
    }
    
    setAge = (e) => {
            this.props.setAge(e.target.value > 130 ? 130 : e.target.value);
        }    

render() {

    return(
        <fieldset id="age">

            <label 
            htmlFor="age" 
            className="tdee-inputs__label" 
            id="inputs-age"> 
            Age (max age: 130)
            </label>

                <br />

            <input 
            type="number" 
            // value={this.props.age} 
            onChange={this.setAge}
            onKeyPress={this.inputsToIgnore}
            onBlur={this.ifInputExceedsMaxAge}
            />

            {console.log(this.props.age)}

        </fieldset>
        )
    }
}

export default InputAge;