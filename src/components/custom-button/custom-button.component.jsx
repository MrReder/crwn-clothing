import React from'react';

import './custom-button.styles.scss';

const CustomButton = ({children, loginMethod, ...otherProps}) => (
    <button className="custom-button" onClick={loginMethod}>
    {children}
    </button>
)

export default CustomButton;