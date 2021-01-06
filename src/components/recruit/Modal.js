import React from 'react';
import ReactDOM from 'react-dom';

const ModalStyle={
    position: 'absolute',
    top: '100px',
    width: '100%',
    height: '500px',
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    color: 'white',
};

const Modal = ({ isShowing, hide, teamName, teamDesc, recruitStatus }) => isShowing ? ReactDOM.createPortal(
  <>
    <div className="modal-wrapper" >
      <div className="modal">
        {/* Modal 창 내용 */}
        <div style={ModalStyle} data-dismiss="modal" aria-label="Close" onClick={hide}>
            {teamName} 
            <br/>
            {teamDesc}
            <br/>
            {recruitStatus}
            </div>
      </div>
    </div>
  </>, document.body
) : null;

export default Modal;

// aria-modal aria-hidden tabIndex={-1} role="dialog"