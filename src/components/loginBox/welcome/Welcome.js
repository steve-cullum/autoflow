import React from 'react';
import './Welcome.css';
import { 
    SIGN_IN,
    WELCOME_MESSAGE,
} from 'constants/constants'; 

const Welcome = () => (
    <div class="welcomeMessage">
        <h2>{SIGN_IN}</h2>
        <p>{WELCOME_MESSAGE}</p>
    </div>
)

export default Welcome;