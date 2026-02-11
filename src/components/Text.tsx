import React from 'react';

export const Text = ({ children, content, style, className, ...props }) => {
  return (
    <div className={className} style={style} {...props}>
      {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children}
    </div>
  );
};

export default Text;
