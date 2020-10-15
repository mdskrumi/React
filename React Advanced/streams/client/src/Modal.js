import React from 'react';
import ReactDOM from 'react-dom';




const Modal = ({ headerMsg, contentMsg, YES, NO, onDismiss, onYesClicked }) => {

    const onCancelModal = () => {
        onDismiss();
    }


    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active" onClick={(e) => { e.stopPropagation() }}>
                <div className="header"> {headerMsg} </div>
                <div className="content"> {contentMsg} </div>
                <div className="actions">
                    {(YES) ? <button className="ui button primary" onClick={onYesClicked}>Yes</button> : null}
                    {(NO) ? <button className="ui button negative" onClick={() => { onCancelModal() }}>No</button> : null}
                    <button className="ui button" onClick={() => { onCancelModal() }}>Cancel</button>
                </div>
            </div>
        </div>,
        document.getElementById("modal")
    )
}

export default Modal;