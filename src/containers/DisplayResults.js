import React from "react"

class DisplayResults extends React.Component {
    constructor(props) {
        super(props);
            this.state = {
                val: '',
            }
        }

    render() {
        return(
            <section className="tdee-results">
                
                <h2 className="tdee-results__title">Your measurements are as follows: </h2>
                
                <div className="tdee-resultsSubcontainer">
                    <h3 className="tdee-resultsSubcontainer__title">TDEE: {this.props.val}</h3>
                </div>

                <div className="tdee-resultsSubcontainer">
                    <h3 className="tdee-resultsSubcontainer__title">BMI: {this.props.val}</h3>
                </div>
                
                <div className="tdee-resultsSubcontainer">
                    <h3 className="tdee-resultsSubcontainer__title">BMR: {this.props.val}</h3>
                </div>

            </section>
        )
    }
}

export default DisplayResults;