import React, { Component } from 'react';
import Select from './select';

class Form extends Component {
    state = {  
        data: []
    }

    handleChange = () => {
        console.log("handleChange");
    }

    renderButton(){
        return(
            <button></button>
        )
    }

    renderSelect(name, label, options){
        const { data } = this.state.data;

        return (
            <Select 
                name={name}
                value={data[name]}
                label={label}
                options={options}
                onChange={this.handleChange}
            />
        )
    }
}
 
export default Form;