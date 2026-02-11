import React from 'react';

export const Image = ({ src, externalSrc, alt = '', style, className, ...props }) => {
  const imageSrc = externalSrc || src;
  
  return (
    <img 
      src={imageSrc} 
      alt={alt} 
      className={className} 
      style={style} 
      {...props}
    />
  );
};

export default Image;
