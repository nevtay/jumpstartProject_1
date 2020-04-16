import React from 'react'
import InputGender from '../components/Input-Gender'
import InputAge from '../components/Input-Age'
import InputHeight from '../components/Input-Height'
import InputWeight from '../components/Input-Weight'
import InputActivityLevel from '../components/Input-ActivityLvl'
import ToggleMeasuringUnits from '../components/ToggleMeasuringUnits'
import './InputsForCalculator.css'
import DisplayResults from './DisplayResults'
import './DisplayInputs.css'
import convert from 'convert-units'

class DisplayInputs extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      age: '',
      gender: '',
      heightInCm: '',
      heightInFeet: '',
      heightInInches: '',
      weightInKg: '',
      weightInLbs: '',
      activityLevel: '',
      unitType: 'metric'
    }
  }

  render () {
    const setGender = (e) => {
      this.setState({
        gender: e.target.value
      })
    }

    const setAge = (e) => {
      const ageToSet = e.target.value
      if (ageToSet > 130) {
        e.preventDefault()
        e.target.value = 130
      } else {
        if (ageToSet < 0) {
          e.preventDefault()
          e.target.value = 0
        }
      }
      this.setState({
        age: e.target.value
      })
    }

    const setHeightInCm = (e) => {
      const MAX_LENGTH_FOR_CM = 3
      if (e.target.value.length > MAX_LENGTH_FOR_CM) {
        return
      }
      const cmToinches = convert(e.target.value).from('cm').to('in')
      this.setState({
        heightInCm: e.target.value,
        heightInFeet: Math.floor(cmToinches / 12),
        heightInInches: (cmToinches % 12).toFixed(1)
      })
    }

    const setHeightInFeet = (e) => {
      const inchesToCm = convert(this.state.heightInInches).from('in').to('cm')
      const MAX_LENGTH_FOR_FEET = 1
      if (e.target.value.length > MAX_LENGTH_FOR_FEET) {
        return
      }
      const feetToCm = (feet) => {
        return convert(feet).from('ft').to('cm')
      }
      if (e.target.value >= 9) {
        e.target.value = 9
        this.setState({
          heightInFeet: e.target.value,
          heightInCm: Math.floor((inchesToCm + feetToCm(e.target.value)))
        })
      } else if (e.target.value < 0) {
        e.target.value = ''
        this.setState({
          heightInFeet: e.target.value,
          heightInCm: Math.floor((inchesToCm + feetToCm(e.target.value)))
        })
      } else {
        this.setState({
          heightInFeet: e.target.value,
          heightInCm: Math.floor((inchesToCm + feetToCm(e.target.value)))
        })
      }
    }

    const setHeightInInches = (e) => {
      const feetToCm = convert(this.state.heightInFeet).from('ft').to('cm')
      const convertInchesStringToNumber = parseFloat(e.target.value)
      const MAX_LENGTH_FOR_INCHES = 4
      if (e.target.value.length > MAX_LENGTH_FOR_INCHES) {
        return
      }
      const inchesToCm = (feet) => {
        return convert(feet).from('in').to('cm')
      }
      if (convertInchesStringToNumber >= 11) {
        e.target.value = 11
        this.setState({
          heightInInches: e.target.value,
          heightInCm: Math.floor((feetToCm + inchesToCm(e.target.value)))
        })
      } else if (convertInchesStringToNumber < 0) {
        e.target.value = ''
        this.setState({
          heightInInches: 0,
          heightInCm: Math.floor((feetToCm + inchesToCm(e.target.value)))
        })
      } else {
        this.setState({
          heightInInches: convertInchesStringToNumber,
          heightInCm: Math.floor((feetToCm + inchesToCm(e.target.value)))
        })
      }
    }

    const setWeightInKg = (e) => {
      const MAX_LENGTH_FOR_KG = 3
      if (e.target.value.length > MAX_LENGTH_FOR_KG) {
        return
      }
      this.setState({
        weightInKg: e.target.value,
        weightInLbs: Math.floor(convert(e.target.value).from('kg').to('lb'))
      })
    }

    const setWeightInLbs = (e) => {
      this.setState({
        weightInLbs: e.target.value,
        weightInKg: convert(e.target.value).from('lb').to('kg').toFixed(0)
      })
    }

    const setActivityLevel = (activityLevel) => {
      this.setState({
        activityLevel: activityLevel
      })
    }

    const setMeasuringUnit = () => {
      if (this.state.unitType === 'imperial') {
        this.setState({
          unitType: 'metric'
        })
      }
      if (this.state.unitType === 'metric') {
        this.setState({
          unitType: 'imperial'
        })
      }
    }

    const resetInputFields = () => {
      this.setState({
        gender: this.state.gender,
        age: '',
        heightInCm: '',
        heightInFeet: '',
        heightInInches: '',
        weightInKg: '',
        weightInLbs: '',
        activityLevel: '',
        unitType: 'metric'
      })
    }
    return (
      <section data-testid="DisplayInputs" className="tdee-container">
        <div className="tdee-container-inputs">
          <form className="tdee-inputs">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                flexFlow: 'row wrap',
                margin: 'auto'
              }}
            >
              <div style={{ width: '45%' }}>
                <ul
                  style={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                  }}
                >
                  <h3>
                    <strong>Instructions!</strong>
                  </h3>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    BMI requires height and weight
                  </li>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    BMR requires height, weight, age, and gender
                  </li>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    TDEE requires all inputs to be filled and an option picked
                    from the activity level box.
                  </li>
                </ul>
              </div>

              <div style={{ width: '45%' }}>
                <ul
                  style={{
                    display: 'flex',
                    flexFlow: 'column wrap',
                    alignItems: 'flex-start',
                    textAlign: 'left'
                  }}
                >
                  <h3>
                    <strong>Definitions!</strong>
                  </h3>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    BMI: Body Mass Index
                  </li>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    BMR: Basal Metabolic Rate
                  </li>
                  <li style={{ listStyleType: 'square', margin: '0' }}>
                    TDEE: Total Daily Energy Expenditure.
                  </li>
                </ul>
              </div>
            </div>

            <ToggleMeasuringUnits
              gender={this.state.gender}
              currentUnitType={this.state.unitType}
              toggleUnitType={setMeasuringUnit}
            />
            <h3>CURRENT UNIT TYPE: {this.state.unitType.toUpperCase()}</h3>

            <InputGender setGender={setGender} />

            <InputAge age={this.age} setAge={setAge} />

            <InputHeight
              heightInCm={this.state.heightInCm}
              heightInInches={this.state.heightInInches}
              heightInFeet={this.state.heightInFeet}
              setHeightInCm={setHeightInCm}
              setHeightInFeet={setHeightInFeet}
              setHeightInInches={setHeightInInches}
              setMeasuringUnit={this.state.unitType}
            />

            <InputWeight
              weightInKg={this.state.weightInKg}
              weightInLbs={this.state.weightInLbs}
              setWeightInKg={setWeightInKg}
              setWeightInLbs={setWeightInLbs}
              setMeasuringUnit={this.state.unitType}
            />

            <InputActivityLevel setActivityLevel={setActivityLevel} />

            <input
              style={{ width: '150px', margin: 'auto' }}
              type="reset"
              value="Reset All Fields"
              defaultChecked={false}
              onClick={resetInputFields}
            />
          </form>
        </div>

        <div className="tdee-container-inputResults">
          <DisplayResults personalInfo={{ ...this.state }} />
        </div>
      </section>
    )
  }
}

export default DisplayInputs
