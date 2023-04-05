import React from 'react';

interface IndentProps {
  indentNumber: number;
}

export const Indent = ({ indentNumber }: IndentProps) => {
  let indents = [];

  for (let i = 0; i < indentNumber; i++) {
    indents.push(
      <span
        key={i}
        style={{ width: 20, height: '100%', display: 'inline-flex' }}
      />
    );
  }

  return (
    <span className='indent-wrapper' style={{ display: 'inline-flex' }}>
      {indents && indents.map(indent => indent)}
    </span>
  );
};

