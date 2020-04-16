import React from 'react'
import convert from 'convert-units'

class DisplayResults extends React.Component {
  render () {
    // can we convert feet and inches to inches first? then separate it out into two input boxes
    const {
      gender,
      age,
      heightInCm,
      heightInFeet,
      heightInInches,
      weightInKg,
      weightInLbs,
      activityLevel,
      unitType
    } = this.props.personalInfo

    const calculateBMI = ({ heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, unitType } = this.props.personalInfo) => {
      if (unitType === 'metric') {
        if (heightInCm === '' || weightInKg === '') {
          return 0
        }
        const weightFactor = Number(weightInKg)
        const heightInMetres = Number(heightInCm) / 100
        const result = weightFactor / (Math.pow(heightInMetres, 2))
        return result.toFixed(2)
      } else {
        if (unitType === 'imperial') {
          if (!heightInInches && !heightInFeet) {
            return 0
          }
          if (weightInLbs === '') {
            weightInLbs = 0
          }
          if (heightInInches === '') {
            heightInInches = 0
          }
          if (heightInFeet === '') {
            heightInFeet = 0
          }
          console.log(weightInLbs, heightInFeet, heightInInches)
          const weightFactor = Number(weightInLbs)
          const feetToInches = convert(heightInFeet).from('ft').to('in')
          const totalHeightInInches = Number(heightInInches) + Number(feetToInches)
          const result = (weightFactor / (Math.pow(totalHeightInInches, 2))) * 703
          return result.toFixed(2)
        }
      }
    }

    const result = (weightFactor, heightFactor, ageFactor, genderFactor) => weightFactor + heightFactor - ageFactor + genderFactor

    const calculateBMR = ({ age, gender, heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, unitType } = this.props.personalInfo) => {
      const weightFactorMetric = weight => Number(weight * 10)
      const weightFactorImperial = weight => Number(weight * 4.536)
      const heightFactorMetric = height => Number(height * 6.25)
      const heightFactorImperial = height => Number(height * 15.88)
      const ageFactor = age => Number(age * 5)
      function genderFactor (gender) {
        if (gender === 'male') {
          return 5
        } else {
          return -161
        }
      }
      if (unitType === 'metric') {
        if (
          !age || parseInt(age) === 0 ||
          Boolean(gender) === false ||
          Boolean(heightInCm) === false ||
          Boolean(weightInKg) === false
        ) {
          return 0
        } else {
          return result(
            weightFactorMetric(weightInKg),
            heightFactorMetric(heightInCm),
            ageFactor(age),
            genderFactor(gender)
          ).toFixed(2)
        }
      }
      if (unitType === 'imperial') {
        if (
          !age || parseInt(age) === 0 ||
          Boolean(age) === false ||
          Boolean(gender) === false ||
          Boolean(weightInLbs) === false
        ) {
          return 0
        } else if (Boolean(heightInFeet) === false && Boolean(heightInInches) === false) {
          return 0
        } else {
          const feetToInches = convert(heightInFeet).from('ft').to('in')
          const totalHeightInInches = Number(heightInInches) + Number(feetToInches)
          return result(
            weightFactorImperial(weightInLbs),
            heightFactorImperial(totalHeightInInches),
            ageFactor(age),
            genderFactor(gender)
          ).toFixed(2)
        }
      }
    }

    const calculateTDEE = ({ activityLevel } = this.props.personalInfo) => {
      return Math.floor(calculateBMR() * activityLevel)
    }

    if (unitType === 'metric') {
      calculateBMI(heightInCm, weightInKg)
      calculateBMR(heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, unitType)
      calculateTDEE(activityLevel)
    } else {
      if (unitType === 'imperial') {
        calculateBMI(heightInFeet, heightInInches, weightInLbs)
        calculateBMR(age, gender, heightInFeet, heightInInches, weightInLbs)
        calculateTDEE(activityLevel)
      }
    }

    const messageBMI = (bmiFn) => {
      if (bmiFn === 0) {
        return
      }
      if (bmiFn < 18.5) {
        return 'Underweight! A healthy BMI is between 18.5 and 25.'
      }
      if (bmiFn >= 18.5 && bmiFn <= 25) {
        return "You're healthy! A healthy BMI is between 18.5 and 25."
      }
      if (bmiFn > 25 && bmiFn <= 29.9) {
        return 'Overweight! A healthy BMI is between 18.5 and 25.'
      }
      if (bmiFn > 30) {
        return 'Very overweight! A healthy BMI is between 18.5 and 25.'
      }
    }

    return (

      <section data-testid="DisplayResults" className="tdee-results">

        <h1>Results</h1>
        <h2>BMI: {calculateBMI()}</h2>
        <span style={{ maxWidth: '150px' }}>{messageBMI(calculateBMI)}</span>
        <h2>BMR: {calculateBMR()} calories a day</h2>
        <h2>TDEE: {calculateTDEE()} calories a day</h2>

      </section>

    )
  }
}

export default DisplayResults
