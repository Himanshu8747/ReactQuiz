import React from 'react';

const Main = ({ children }) => {
  return (
    <main className="main-container h-screen bg-gray-900 p-4">
      {children}
    </main>
  );
};

export default Main;
