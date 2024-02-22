import React from 'react';

const Error = () => {
  return (
    <div className='error-container text-center mt-8'>
      <p className='error text-2xl'>
        <span className='text-4xl'>❌</span> There was an error fetching questions!
      </p>
    </div>
  );
}

export default Error;
