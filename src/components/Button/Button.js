import React from 'react';
import classNames from 'classnames';

import './Button.scss';

function Button({children, outlined, onClick}) {
    const classes = classNames({
        outlined
    });

    return (
        <button
            className={classes}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
