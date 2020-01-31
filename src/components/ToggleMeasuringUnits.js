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
                value={this.props.value === 'metric' ? "Use Imperial Units" : "Use Metric Units"}
                onClick={this.toggleMeasuringUnits}
                onChange={this.toggleMeasuringUnits}
                 />
            {console.log(this.props)}
            </div>
        )
    }
}

export default ToggleMeasuringUnits