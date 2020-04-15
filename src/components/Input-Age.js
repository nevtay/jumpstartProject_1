import React from "react";

class InputAge extends React.Component {
  render() {
    const filterCharacters = (e) => {
      const keyboardChar = e.key;
      const invalidCharacters = /[-.]/;
      if (keyboardChar.match(invalidCharacters)) {
        e.preventDefault();
      }
    };

    return (
      <fieldset id="age">
        <label htmlFor="age" id="inputs-age">
          Age
        </label>

        <input
          type="number"
          value={this.props.age}
          onChange={this.props.setAge}
          onKeyDown={filterCharacters}
          placeholder="years"
        />
      </fieldset>
    );
  }
}

export default InputAge;
