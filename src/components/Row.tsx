import React from 'react';

export const Row = ({ children, style, className, ...props }) => {
  return (
    <div className={`row ${className || ''}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Row;
