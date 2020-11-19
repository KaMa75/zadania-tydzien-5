import React from 'react';

import './Dialog.scss';

function Dialog({children}) {
    return (
        <div className="Dialog">
            {children}
        </div>
    );
}

export default Dialog;
