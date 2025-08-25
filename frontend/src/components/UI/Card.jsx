import React from 'react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-lg shadow-sm border ${hover ? 'hover:shadow-md' : ''} transition-shadow ${className}`}>
      {children}
    </div>
  );
};

export default Card;