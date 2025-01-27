import React from 'react';
import './LoadingIndicator.css';

const LoadingIndicator: React.FC = () => {
    return (
        <div className="loading-spinner">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default LoadingIndicator;
