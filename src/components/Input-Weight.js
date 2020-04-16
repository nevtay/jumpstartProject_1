import React from 'react'

class InputWeight extends React.Component {
  render () {
    const invalidCharacters = /[-.]/
    const filterCharacters = (e) => {
      const keyboardChar = e.key
      if (keyboardChar.match(invalidCharacters)) {
        e.preventDefault()
      }
    }
    const measuringUnitToUse = this.props.setMeasuringUnit
    let showKg
    let showLbs

    if (measuringUnitToUse === 'metric') {
      showLbs = ''
      showKg = <input
        type="number"
        value={this.props.weightInKg}
        onChange={this.props.setWeightInKg}
        onKeyPress={filterCharacters}
        placeholder="kg"
      />
    } else {
      showKg = ''
      showLbs = <input
        type="number"
        value={this.props.weightInLbs}
        onChange={this.props.setWeightInLbs}
        onKeyPress={filterCharacters}
        placeholder="lbs"
      />
    }

    return (
      <fieldset id="weight">

        <label htmlFor="weight"className="tdee-inputs__label">
          {this.props.setMeasuringUnit === 'metric' ? 'Weight (kg)' : 'Weight (lbs)'}
        </label>

        {this.props.setMeasuringUnit === 'metric' ? showKg : showLbs}

      </fieldset>
    )
  }
}

export default InputWeight
