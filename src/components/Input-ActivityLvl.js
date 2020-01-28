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
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                    <option value="very high">Very High</option>
                    
                </select>

        </fieldset>
        )
    }
}

export default InputActivityLvl;