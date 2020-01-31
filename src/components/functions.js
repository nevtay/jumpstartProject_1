// import React from "react"


// export const calculateBMR = (props) => {
//     if ( props.gender === '' || props.age === '' || props.height === '' || props.weight === '' ) {
//         return 0;
//     }
//         let weightFactor = Number(props.weight) * 10;
//         let heightFactor = Number(props.height) * 6.25;
//         let ageFactor = Number(props.age) * 5;
//         let genderFactor = gender === "male" ? 5 : -161; 
//         let result = (weightFactor + heightFactor - ageFactor + genderFactor)
//     return <p>BMR: {result.toFixed(2)}</p>;
// }

// export const calculateBMI = (props) => {
//     if ( props.height === '' || props.weight === '' ) {
//         return 0;
//     }
//         let weightFactor = Number(props.weight);
//         let heightInMetres = Number(props.height) / 100;
//         let result = weightFactor / Math.pow(heightInMetres, 2);
//     return <p>BMI: {parseInt(result)}</p>;
// }