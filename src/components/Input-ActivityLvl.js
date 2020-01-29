import React from "react"

class InputActivityLvl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activityLevel: '',
        }
    }

    updateActivityLevel = (e) => {
        this.props.activityLevelUpdate(e.target.value);
    }

render() {

    return(
        <fieldset id="activity-level">
            
            <label 
            for="activity-level">
                Activity Level
                </label>

                <select 
                className="tdee-inputs__label tdee-input__activityLevel" 
                onChange={this.updateActivityLevel}>
                    
                    <option value="none" selected disabled hidden>Choose...</option>
                    <option value="1.2">Sedentary</option>
                    <option value="1.375">Lightly Active</option>
                    <option value="1.55">Moderately Active</option>
                    <option value="1.725">Very Active</option>
                    <option value="1.9">Extremely Active</option>
                    
                </select>

        </fieldset>
        )
    }
}

export default InputActivityLvl;