import React from 'react';
import './ButtonGroup.css';
import { 
    LOGIN, 
    SIGN_UP,
} from 'constants/constants'; 

const ButtonGroup = () => (
    <div className="buttonGroup">
        <button 
            className="loginButton" 
            type="button"
        >
            <span>{LOGIN}</span>
        </button>
        <button 
            className="signUpButton" 
            type="button"
        >
            <span>{SIGN_UP}</span>
        </button>
    </div>
)

export default ButtonGroup;