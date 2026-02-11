import React from 'react';

export const List = ({ children, style, className, ...props }) => {
  return (
    <ul className={`list ${className || ''}`} style={style} {...props}>
      {children}
    </ul>
  );
};

export const ListItem = ({ children, content, style, className, ...props }) => {
  return (
    <li className={className} style={style} {...props}>
      {content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children}
    </li>
  );
};

export default List;
