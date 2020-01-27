import React from "react"

class InputGender extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'',
        }
    }

render() {
    return(
        <fieldset id="gender">
        <p>Select Gender</p>
            <input type="radio" name="gender" id="male" value="male" />
                <label className="tdee-inputs__label" for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
                <label className="tdee-inputs__label" for="female">Female</label>
        </fieldset>
        )
    }
}

export default InputGender;