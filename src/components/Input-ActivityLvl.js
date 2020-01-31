import React from "react"

class InputActivityLvl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activityLevel: '',
        }
    }

    updateActivityLevel = (e) => {
        this.props.setActivityLevel(e.target.value);
    }

render() {

    return(
        <fieldset id="activity-level">
            
            <label 
            htmlFor="activity-level">
                Activity Level
                </label>

                <select 
                defaultValue={"none"}
                className="tdee-inputs__label tdee-input__activityLevel" 
                style={{maxWidth: "200px"}} 
                onChange={this.updateActivityLevel}>
                    
                    <option value="none" disabled hidden>Choose...</option>
                    <option value="1.2">Sedentary (little to no exercise)</option>
                    <option value="1.375">Lightly Active (exercise 1-3 days a week)</option>
                    <option value="1.55">Moderately Active (exercise 4-5 days a week)</option>
                    <option value="1.725">Very Active (exercise 6 days a week)</option>
                    <option value="1.9">Extremely Active (professional athlete/manual laborer)</option>
                    
                </select>

                <br />
                <br />

        </fieldset>
        )
    }
}

export default InputActivityLvl;