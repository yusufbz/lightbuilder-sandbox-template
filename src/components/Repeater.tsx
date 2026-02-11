import React from 'react';

export const Repeater = ({ children, source, style, className, ...props }) => {
  // In a real implementation, this would fetch data from the source
  // For now, it just renders the template child once
  return (
    <div className={`repeater ${className || ''}`} style={style} data-source={source} {...props}>
      {children}
    </div>
  );
};

export default Repeater;
