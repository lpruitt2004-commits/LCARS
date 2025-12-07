import React from "react";

const Modal = ({ open, onClose, children }) => {
  if (!open) return null;
  return (
    <div className="lcars-modal-backdrop" onClick={onClose}>
      <div className="lcars-modal" onClick={(e) => e.stopPropagation()}>
        <button className="lcars-modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
