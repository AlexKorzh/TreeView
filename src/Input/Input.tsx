import React from 'react';

interface InputProps {
  name?: string;
}

const inputStyle = {
  width: 400,
  height: 40,
  boxSizing: 'border-box',
  outline: 'none',
  border: 'none',
  borderBottom: '1px solid black',
};

export const Input = ({ name }: InputProps) => {
  return (
    <input
      placeholder='https://github.com'
      className='search-input'
      type='text'
      name={name}
      style={inputStyle}
    />
  );
};
