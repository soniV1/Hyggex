import React, { useState } from 'react';

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={`border border-gray-200  rounded-tl-lg rounded mb-4 ${isOpen ? 'mb-8' : ''}`}>
      <div className="flex justify-between items-center px-4 py-2 cursor-pointer" onClick={toggleCollapse}>
        <h2 className="text-lg font-semibold">{title}</h2>
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 transition-transform ${isOpen ? 'transform rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      {isOpen && (
        <div className="px-4 py-2">
          {children}
        </div>
      )}
    </div>
    </>
  );
}

export default Collapse;
