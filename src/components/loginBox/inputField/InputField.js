import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = (props) => {
    const { 
        label, 
        type,
    } = props;

    return (
        <div className="inputField">
            <label className="label"> {label} </label>
            <div className="inputContainer">
                <input 
                    className="input" 
                    type={type}
                />
                { 
                    type === 'password' &&
                        <i
                            className="far fa-eye" 
                            id="togglePassword">
                        </i>
                }   
            </div>
    </div>
  )
}

InputField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
};

export default InputField;