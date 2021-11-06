import React from'react';

import './custom-button.styles.scss';

const CustomButton = ({children, loginMethod, isGoogleSignIn, ...otherProps}) => (
    <button className={`${isGoogleSignIn ? "google-sign-in" : " "} custom-button`} 
    onClick={loginMethod}
    {...otherProps}>
    {children}
    </button>
)

export default CustomButton;