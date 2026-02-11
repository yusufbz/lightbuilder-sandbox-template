import React from 'react';

export const Col = ({ children, style, className, colWidth = 12, ...props }) => {
  const colClass = `col-${colWidth}`;
  return (
    <div className={`${colClass} ${className || ''}`} style={style} {...props}>
      {children}
    </div>
  );
};

export default Col;
