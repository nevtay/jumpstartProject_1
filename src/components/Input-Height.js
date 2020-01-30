import React from "react"

class InputHeight extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            height: '',
        }
    }

    updateHeight = (e) => {
        const maxInputLength = 3;
        if (e.charCode === 46 || e.charCode === 45 || e.charCode === 101 || e.target.value === "0" || e.target.value.length > maxInputLength) {
            e.preventDefault();
            return;
        } 
        this.props.setHeight(e.target.value);
        this.setState({
            height: e.target.value
        })
    }

render() {

    return(
        <fieldset id="height">
           
            <label 
            for="height" 
            className="tdee-inputs__label"> 
            Height (cm) </label>

                <input 
                id="inputs-height" 
                type="number" 
                value={this.state.height} 
                onChange={this.updateHeight}
                onKeyPress={this.updateHeight}
                 />
                
        </fieldset>
        )
    }
}

export default InputHeight;