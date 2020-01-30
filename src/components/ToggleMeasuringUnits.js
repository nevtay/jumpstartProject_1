import React from "react"

class ToggleMeasuringUnits extends React.Component {
    
    toggleMeasuringUnits = (e) => {
        this.props.unitType(e.target.value)
    }
    
    render() {
        return (
            
            <div className="toggle-switch">
                <span> Click box to toggle betwen imperial and metric units {`>>>`} </span>
                <input 
                type="checkbox" 
                className="toggle-switch-checkbox" 
                onChange={this.toggleMeasuringUnits}
                 />
            </div>
        )
    }
}

export default ToggleMeasuringUnits