import React from "react"

class InputAge extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            age: '',
        }
    }

    updateAge = (e) => {
        this.setState({
            age: e.target.value
        })
        console.log(this.state.age)
    }

render() {

    // const ageTooOld = (age) => {
    //     let currentAge = age;
    //     let currentStrLength = String(currentAge).length
    //     let maxAge = 130;
    //     let maxStrLength = 3;
    //     let isOverMaxStrLength = currentStrLength > maxStrLength;
    //     let isOverMaxAge = currentAge > maxAge;
    //     if (isOverMaxStrLength || isOverMaxAge) {
    //         return false;
    //     }
    //     return age;
    // }
    return(
        <fieldset id="age">
            <p>Enter Age</p>
            <label for="age" className="tdee-inputs__label" id="inputs-age"> Age </label>
                <input type="number" value={this.state.age} onChange={this.updateAge} />
        </fieldset>
        )
    }
}

export default InputAge;