import React from "react"
import InputGender from "../components/Input-Gender"
import InputAge from "../components/Input-Age"
import InputHeight from "../components/Input-Height"
import InputWeight from "../components/Input-Weight"
import InputActivityLevel from "../components/Input-ActivityLvl"

class CalcInputs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value:'',
        }
    }
    render() {
        return (
            <section className="tdee-inputs">
                <form>
                
                <InputGender />
                <InputAge />
                <InputHeight />
                <InputWeight />
                <InputActivityLevel />

                </form>
            </section>
        )
    }
    
}

 export default CalcInputs;