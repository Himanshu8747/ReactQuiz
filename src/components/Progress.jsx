import React from 'react';

const Progress = ({ index, numberOfQuestions, points, maxPoints, answer }) => {
  return (
    <header className='progress-container m-auto w-2/4 text-white p-4 rounded-lg  mb-4'>
      <progress
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        max={numberOfQuestions}
        value={index + Number(answer != null)}
      />
      <p className='progress-text'>
        Question <strong>{index + 1}</strong> / {numberOfQuestions}
      </p>
      <p className='progress-text'>
        <strong>{points}</strong> / {maxPoints}
      </p>
    </header>
  );
};

export default Progress;
