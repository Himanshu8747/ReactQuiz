import React from 'react';

const WelcomeScreen = ({ numberOfQuestions, dispatch, questions }) => {
  return (
    <div className='ready-state-container text-center bg-gray-800 text-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-5xl font-bold mb-4'>Welcome to The React Quiz!</h2>
      <h3 className='text-lg mb-6'>Answer {numberOfQuestions} questions to test your React Mastery</h3>
      <button
        className='bg-purple-900 hover:bg-purple-600 text-white  py-2 px-4 rounded focus:outline-none'
        onClick={() => dispatch({ type: 'Start' })}
      >
        Let's Start
      </button>
    </div>
  );
};

export default WelcomeScreen;
