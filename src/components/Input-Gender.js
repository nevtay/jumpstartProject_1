import React from 'react'
import './Input-Gender.css'

class InputGender extends React.Component {
  render () {
    return (
      <fieldset className="tdee-input-gender-fieldset" id="gender">

        <div className="input-group-description">
          <label>Select Biological Gender: </label>
        </div>

        <div className="input-group">

          <div className="input-subGroup">
            <div className="input-group-radioInput">
              <input
                type="radio"
                name="gender"
                id="male"
                onChange={this.props.setGender}
                value="male"
              />
            </div>

            <div className="input-group-radioLabel">
              <label htmlFor="male">
              Male
              </label>
            </div>
          </div>

          <div className="input-subGroup">
            <div className="input-group-radioInput">
              <input
                type="radio"
                name="gender"
                id="female"
                onChange={this.props.setGender}
                value="female"
              />
            </div>

            <div className="input-group-radioLabel">
              <label className="tdee-inputs__label" htmlFor="female">
              Female
              </label>
            </div>
          </div>

        </div>
      </fieldset>
    )
  }
}

export default InputGender
