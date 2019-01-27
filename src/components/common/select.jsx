import React from 'react';

const Select = ({ name, label, options, placeholder, ...rest}) => {
    return (  
        <React.Fragment>
        <label htmlFor={name}>{label}</label>
            <select name={name} id={name} {...rest} className="custom-select">
                <option value="" />
                {options.map(option => (
                    <option key={option._id} value={option._id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </React.Fragment>
    );
}
 
export default Select;