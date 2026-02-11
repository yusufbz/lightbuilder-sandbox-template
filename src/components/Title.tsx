import React from 'react';

export const Title = ({ children, content, size = '1', style, className, ...props }) => {
  const HeadingTag = `h${size}`;
  
  return React.createElement(
    HeadingTag,
    { className, style, ...props },
    content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children
  );
};

export default Title;
