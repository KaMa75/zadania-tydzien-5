import React from 'react';

function DialogContent({children}) {
    return (
        <div className="modal--content">
            <p>
                {children}
            </p>
        </div>
    );
}

export default DialogContent;
