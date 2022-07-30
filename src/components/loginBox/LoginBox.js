import React from 'react';
import './LoginBox.css';
import Checkbox from 'components/loginBox/checkbox/Checkbox';
import InputField from 'components/loginBox/inputField/InputField';
import Logo from 'components/loginBox/logo/Logo';
import Welcome from 'components/loginBox/welcome/Welcome';
import ButtonGroup from 'components/loginBox//buttonGroup/ButtonGroup';
import { 
    FORGOT_PASSWORD,
    KEEP_SIGNED_IN,
    PASSWORD_LABEL,
    USERNAME_LABEL,
} from 'constants/constants';


const LoginBox = () => (
    <div className="loginContainer">
            <Logo />
            <Welcome />
            <InputField label={USERNAME_LABEL}/>
            <InputField 
                label={PASSWORD_LABEL}
                type="password"
            />
            <Checkbox 
                label={KEEP_SIGNED_IN} 
                secondaryLabel={FORGOT_PASSWORD}
            />
            <ButtonGroup />
    </div>
)

export default LoginBox;
