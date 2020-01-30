import React from "react"

class ToggleMeasuringUnits extends React.Component {
    
    toggleMeasuringUnits = (e) => {
        this.props.unitType(e.target.value)
    }

    
    
    render() {
        return (
            
            <div className="toggle-switch">
                <input 
                type="reset"
                value="Switch Units" 
                className="toggle-switch-checkbox" 
                onClick={this.toggleMeasuringUnits}
                onChange={this.toggleMeasuringUnits}
                 />
            </div>
        )
    }
}

export default ToggleMeasuringUnits