import React, {useState, useEffect} from 'react';

import './Snackbar.scss';

const positions = {
    'left-top': {
        left: 0,
        top: 0
    },
    'right-top': {
        right: 0,
        top: 0
    },
    'left-bottom': {
        left: 0,
        bottom: 0
    },
    'right-bottom': {
        right: 0,
        bottom: 0
    }
}

const colors = {
    accepted: {
        backgroundColor: '#4caf50',
        color: '#000'
    },
    cancelled: {
        backgroundColor: '#f44336',
        color: '#fff'
    }
}

function Snackbar({children, displayTime, snackbarPosition, snackbarStatus}) {

    const [isDisplayed, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);

        let timer = setTimeout(() => {
            setDisplay(false);
            clearTimeout(timer);
        }, displayTime);

        return () => {
            clearTimeout(timer);
        };

    }, [children]);

    return (
        (children && isDisplayed) && (
            <div className="snacbar-wrapper">
                <div
                    className="snackbar"
                    style={{...positions[snackbarPosition], ...colors[snackbarStatus]}}
                >
                    <p>
                        {children}
                    </p>
                </div>
            </div>
        )
    );
}

Snackbar.defaultProps = {
    displayTime: 5000,
    snackbarPosition: 'left-bottom',
    snackbarStatus: 'accepted'
}

export default Snackbar;
