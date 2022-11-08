import React from 'react';

export default function Button({ children, styles }) {
  return (
    <button
      className={`w-fit mx-auto text-lg leading-5 text-white-orange font-geonist-primary uppercase rounded-md bg-noise bg-btn-orange  bg-50 py-4 px-14 my-2 ${styles}`}
    >
      {children}
    </button>
  );
}
