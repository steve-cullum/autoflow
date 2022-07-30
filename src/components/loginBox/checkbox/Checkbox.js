import React from 'react';
import './Checkbox.css'

const Checkbox = (props) => {
    const { 
        label, 
        secondaryLabel,
    } = props;

    return (
        <div className="checkboxContainer">
            <div className="checkbox" >
                <a href="/">{label}</a>
                    <input 
                        id="checkbox"
                        type="checkbox" 
                    />
                    <span className="checkmark"></span>  
            </div>
            <span><a href="/">{secondaryLabel}</a></span>
        </div>
    )
}

export default Checkbox;