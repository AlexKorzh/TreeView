import React from 'react';

interface ButtonProps {
  type?: 'submit' | 'button';
  onClick?: () => void;
  children: React.ReactNode
}

const buttonStyle = {
  padding: '8px 24px',
  outline: 'none',
  border: '1px solid black',
  background: 'white',
  borderRadius: 10,
  marginRight: 8,
};

export const Button = ({ onClick, type = 'button', children } : ButtonProps) => {
  return (
    <button onClick={onClick} type={type} style={buttonStyle}>{children}</button>
  );
};