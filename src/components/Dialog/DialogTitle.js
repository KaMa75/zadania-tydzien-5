import React from 'react';

function DialogTitle({children}) {
    return (
        <div className="modal--title">
            <h2>
                {children}
            </h2>
        </div>
    );
}

export default DialogTitle;
