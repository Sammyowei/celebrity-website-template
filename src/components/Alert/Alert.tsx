import React from 'react';
import './Alert.css';

const Alert = ({ message, show, onClose }) => {
    if (!show) return null;

    return (
        <div className="alert-overlay">
            <div className="alert-box">
                <p>{message}</p>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Alert;
