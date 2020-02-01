import React from 'react'
import convert from 'convert-units'

class DisplayResults extends React.Component {
  render () {
    // can we convert feet and inches to inches first? then separate it out into two input boxes
    const { gender, age, heightInCm, heightInFeet, heightInInches, weightInKg, weightInLbs, activityLevel, unitType } =
    this.props.personalInfo

    let calculateBMI
    let calculateBMR
    let calculateTDEE

    if (unitType === 'metric') {
      calculateBMI = () => {
        if (Boolean(heightInCm) === false || Boolean(weightInKg) === false) {
          return 0
        }
        const weightFactor = Number(weightInKg)
        const heightInMetres = Number(heightInCm) / 100
        const result = weightFactor / (Math.pow(heightInMetres, 2))
        return result.toFixed(2)
      }

      calculateBMR = () => {
        if (Boolean(age) === false || Boolean(gender) === false || Boolean(heightInCm) === false || Boolean(weightInKg) === false) {
          return 0
        }
        const weightFactor = Number(weightInKg) * 10
        const heightFactor = Number(heightInCm) * 6.25
        const ageFactor = Number(age) * 5
        const genderFactor = gender === 'male' ? 5 : -161
        const result = weightFactor + heightFactor - ageFactor + genderFactor
        return result.toFixed(2)
      }

      calculateTDEE = () => {
        const BMR = calculateBMR()
        const result = Math.floor(BMR * activityLevel)
        return result
      }
    } else {
      if (unitType === 'imperial') {
        calculateBMI = () => {
          if ((Boolean(weightInLbs) === false) || (Boolean(heightInFeet) === false && Boolean(heightInInches) === false)) {
            return 0
          }
          // if metric const result value is the same as below, can simply multiply the function by 703?
          const weightFactor = convert(Number(weightInLbs)).from('lb').to('lb')
          const feetToInches = convert(Number(heightInFeet)).from('ft').to('in')
          const totalHeightInInches = Number(heightInInches) + feetToInches
          const result = weightFactor / (Math.pow(totalHeightInInches, 2)) * 703
          return result.toFixed(2)
        }

        calculateBMR = () => {
          if (Boolean(age) === false || Boolean(gender) === false || Boolean(heightInFeet) === false || Boolean(heightInInches) === false || Boolean(weightInLbs) === false) {
            return 0
          }
          const weightFactor = Number(weightInLbs) * 10
          const feetToInches = convert(Number(heightInFeet)).from('ft').to('in')
          const totalHeightInInches = Number(heightInInches) + feetToInches
          const ageFactor = Number(age) * 5
          const genderFactor = gender === 'male' ? 5 : -161
          const result = weightFactor + totalHeightInInches - ageFactor + genderFactor
          return result.toFixed(2)
        }

        calculateTDEE = () => {
          const BMR = calculateBMR()
          const result = Math.floor(BMR * activityLevel)
          return result
        }
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
        return "You're healthy!"
      }
      if (bmiFn > 25 && bmiFn <= 29.9) {
        return 'Overweight! A healthy BMI is between 18.5 and 25.'
      }
      if (bmiFn > 30) {
        return 'Very overweight! Please contact Valerie for HIIT training.'
      }
    }

    return (

      <section className="tdee-results">

        <h1>Results</h1>
        <h2>BMI: {calculateBMI()}</h2>
        <span style={{ maxWidth: '120px' }}>{messageBMI(calculateBMI())}</span>
        <h2>BMR: {calculateBMR()} calories a day</h2>
        <h2>TDEE: {calculateTDEE()} calories a day</h2>

      </section>

    )
  }
}

export default DisplayResults
