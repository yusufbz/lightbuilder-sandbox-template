import React from 'react';

export const Button = ({ children, content, destination, action, style, className, ...props }) => {
  const handleClick = (e) => {
    if (action) {
      e.preventDefault();
      // Handle action (e.g., 'close-cart', 'validate-coupon', 'process-payment')
      console.log('Button action:', action);
    }
  };

  const buttonContent = content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children;

  if (destination && destination.type) {
    return (
      <a 
        href={destination.value || '#'} 
        className={`button ${className || ''}`} 
        style={style}
        onClick={handleClick}
        {...props}
      >
        {buttonContent}
      </a>
    );
  }

  return (
    <button 
      className={`button ${className || ''}`} 
      style={style}
      onClick={handleClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button;
