import React from 'react';

export const Button = ({ children, handler }) => {
  return (
    <button
      className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
      onClick={handler}
    >
      {children}
    </button>
  );
};
