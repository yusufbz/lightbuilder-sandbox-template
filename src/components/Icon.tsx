import React from 'react';

export const Icon = ({ icon = 'face', style, className, ...props }) => {
  return (
    <span className={`material-icons ${className || ''}`} style={style} {...props}>
      {icon}
    </span>
  );
};

export default Icon;
