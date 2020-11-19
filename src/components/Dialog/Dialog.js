import React from 'react';

import './Dialog.scss';

function Dialog({children}) {
    return (
        <div className="modal-wrapper">
            <div className="modal">
                {children}
            </div>
        </div>
    );
}

export default Dialog;
