import React from 'react';

export const Container = ({ children, style, className, ...props }) => {
  return (
    <div className={className} style={style} {...props}>
      {children}
    </div>
  );
};

export default Container;
