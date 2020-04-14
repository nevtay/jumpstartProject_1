import React from 'react'

class InputAge extends React.Component {
  render () {
    const filterCharacters = e => {
      const keyboardChar = e.key
      const invalidCharacters = /[-.]/
      if (keyboardChar.match(invalidCharacters)) {
        e.preventDefault()
      }
    }

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
          onKeyDownCapture={e => filterCharacters(e)}
          placeholder="years"
        />

      </fieldset>
    )
  }
}

export default InputAge
