import React from "react"

class InputActivityLvl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            activityLevel: '',
            label: '',
        }
    }

    updateActivityLevel = (e) => {
        let index = e.target.selectedIndex;
        let label = e.target[index].text;
        let value = e.target.value;
        this.setState({
            activityLevel: value,
            label: label,
        })
    }

render() {

    return(
        <fieldset id="activity-level">
            <label for="activity-level">Activity Level</label>
                <select className="tdee-inputs__label tdee-input__activityLevel" value={this.state.activityLevel} onChange={this.updateActivityLevel}>
                    <option value="select" disabled>Select</option>
                    <option value="low">Low</option>
                    <option value="moderate">Moderate</option>
                    <option value="high">High</option>
                    <option value="very-high">Very High</option>
                </select>
        </fieldset>
        )
    }
}

export default InputActivityLvl;