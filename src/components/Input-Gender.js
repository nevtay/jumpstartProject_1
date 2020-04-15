import React from "react";

class InputGender extends React.Component {
  render() {
    return (
      <fieldset id="gender">
        <label>Select Biological Gender: </label>

        <input
          type="radio"
          name="gender"
          id="male"
          onChange={this.props.setGender}
          value="male"
        />
        <label className="tdee-inputs__label" htmlFor="male">
          Male
        </label>

        <input
          type="radio"
          name="gender"
          id="female"
          onChange={this.props.setGender}
          value="female"
        />
        <label className="tdee-inputs__label" htmlFor="female">
          Female
        </label>
      </fieldset>
    );
  }
}

export default InputGender;
