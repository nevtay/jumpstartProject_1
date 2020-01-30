import React from "react"

class ToggleMeasuringUnits extends React.Component {
    constructor({props}) {
        super(props);
        this.state = {
            unitType: ''
        }
    }
    
    toggleMeasuringUnits = (e) => {
        this.props.unitType(e.target.value)
    }
    
    render() {
        return (
            <div className="toggle-switch">
                <input 
                type="checkbox" 
                className="toggle-switch-checkbox" 
                onChange={this.toggleMeasuringUnits}
                 />
                <p>Click to toggle betwen imperial and metric units: </p>
            </div>
        )
    }
}

export default ToggleMeasuringUnits