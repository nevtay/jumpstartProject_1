import React from "react";

class InputHeight extends React.Component {
  // eslint-disable-next-line space-before-function-paren
  render() {
    const invalidCharacters = /[-.]/;
    const filterCharacters = (e) => {
      const keyboardChar = e.key;
      if (keyboardChar.match(invalidCharacters)) {
        e.preventDefault();
      }
    };
    const measuringUnitToUse = this.props.setMeasuringUnit;
    let showCentimetres;
    let showFeet;
    let showInches;

    if (measuringUnitToUse === "metric") {
      showCentimetres = (
        <input
          id="inputs-height"
          type="number"
          value={this.props.heightInCm}
          onChange={this.props.setHeightInCm}
          onKeyDownCapture={filterCharacters}
          placeholder="cm"
        />
      );
    } else if (measuringUnitToUse === "imperial") {
      showFeet = (
        <input
          type="number"
          value={this.props.heightInFeet}
          onChange={this.props.setHeightInFeet}
          onKeyDown={filterCharacters}
          placeholder="ft"
        />
      );

      showInches = (
        <input
          type="number"
          value={this.props.heightInInches}
          onChange={this.props.setHeightInInches}
          onKeyDown={filterCharacters}
          placeholder="inches"
        />
      );
    }

    return (
      <fieldset id="height">
        <label htmlFor="height">
          {this.props.setMeasuringUnit === "metric"
            ? "Height (cm)"
            : "Height (feet and inches)"}
        </label>

        {showCentimetres}
        {showFeet}
        {showInches}
      </fieldset>
    );
  }
}

export default InputHeight;
