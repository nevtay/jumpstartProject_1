import React from 'react'

class InputAge extends React.Component {
  render () {
    return (
      <fieldset id="age">

        <label
          htmlFor="age"
          className="tdee-inputs__label"
          id="inputs-age">
            Age (max age: 130)
        </label>

        <input
          type="number"
          max={130}
          min={0}
          value={this.props.age}
          onChange={this.props.setAge}
          placeholder="years"
        />

      </fieldset>
    )
  }
}

export default InputAge
