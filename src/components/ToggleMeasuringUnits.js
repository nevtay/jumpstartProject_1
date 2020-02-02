import React from 'react'

class ToggleMeasuringUnits extends React.Component {
  render () {
    return (
      <div className="toggle-switch">
        <input
          type="checkbox"
          value={this.props.currentUnitType === 'metric' ? 'Use Imperial Units' : 'Use Metric Units'}
          onClick={this.props.toggleUnitType}
          onChange={this.props.toggleUnitType}
        />
      </div>
    )
  }
}

export default ToggleMeasuringUnits
