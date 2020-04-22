import React from 'react'
import convert from 'convert-units'

class DisplayResults extends React.Component {
  render() {
    let {
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

    const calculateBMI = () => {
      const displayBMIResult = (bmiValue) => {
        return isNaN(bmiValue) || !isFinite(bmiValue) ? 0 : bmiValue.toFixed(2)
      }
      if (unitType === 'metric') {
        if (!heightInCm || !weightInKg) {
          return 0
        }
        const weightFactor = Number(weightInKg)
        const heightInMetres = Number(heightInCm) / 100
        const bmiMetric = weightFactor / Math.pow(heightInMetres, 2)
        return displayBMIResult(bmiMetric)
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
          const weightFactor = Number(weightInLbs)
          const feetToInches = convert(heightInFeet).from('ft').to('in')
          const totalHeightInInches =
            Number(heightInInches) + Number(feetToInches)
          const bmiImperial =
            (weightFactor / Math.pow(totalHeightInInches, 2)) * 703
          return displayBMIResult(bmiImperial)
        }
      }
    }

    const handleBMRCalculation = (
      weightFactor,
      heightFactor,
      ageFactor,
      genderFactor
    ) => {
      if (!weightFactor || !heightFactor || !ageFactor || !genderFactor) {
        return 0
      } else {
        return weightFactor + heightFactor - ageFactor + genderFactor
      }
    }

    const calculateBMR = () => {
      const weightFactorMetric = (weight) => Number(weight * 10)
      const weightFactorImperial = (weight) => Number(weight * 4.536)
      const heightFactorMetric = (height) => Number(height * 6.25)
      const heightFactorImperial = (height) => Number(height * 15.88)
      const ageFactor = (age) => Number(age * 5)
      const genderFactor = (gender) => {
        if (!gender) {
          return 0
        }
        if (gender === 'male') {
          return 5
        } else {
          return -161
        }
      }

      if (unitType === 'metric') {
        return handleBMRCalculation(
          weightFactorMetric(weightInKg),
          heightFactorMetric(heightInCm),
          ageFactor(age),
          genderFactor(gender)
        ).toFixed(0)
      } else if (unitType === 'imperial') {
        const feetToInches = convert(heightInFeet).from('ft').to('in')
        const totalHeightInInches =
          Number(heightInInches) + Number(feetToInches)
        return handleBMRCalculation(
          weightFactorImperial(weightInLbs),
          heightFactorImperial(totalHeightInInches),
          ageFactor(age),
          genderFactor(gender)
        ).toFixed(0)
      }
    }

    const calculateTDEE = () => {
      return Math.floor(calculateBMR() * activityLevel)
    }

    if (unitType === 'metric') {
      calculateBMI(heightInCm, weightInKg)
      calculateBMR(
        heightInCm,
        heightInFeet,
        heightInInches,
        weightInKg,
        weightInLbs,
        unitType
      )
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
        return ''
      }
      if (!isFinite(bmiFn) || isNaN(bmiFn)) {
        return <span style={{ fontSize: '1.5rem' }}>Invalid values</span>
      }
      if (bmiFn < 18.5 && bmiFn > 0) {
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
      <section data-testid='DisplayResults' className='tdee-results'>
        <h1>Results</h1>
        <h2>BMI: {calculateBMI()}</h2>
        <span style={{ maxWidth: '150px' }}>{messageBMI(calculateBMI())}</span>
        <h2>BMR: {calculateBMR()} calories a day</h2>
        <h2>TDEE: {calculateTDEE()} calories a day</h2>
      </section>
    )
  }
}

export default DisplayResults
