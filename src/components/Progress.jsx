import React from 'react';

const Progress = ({ index, numberOfQuestions, points, maxPoints, answer }) => {
  return (
    <header className='progress-container m-auto w-2/4 text-white p-4 rounded-lg  mb-4'>
      <progress
        className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700"
        max={numberOfQuestions}
        value={index + Number(answer != null)}
      />
      <div className='flex justify-between gap-10 mt-10'>
        <p className='progress-text  text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white'>
          Question <strong>{index + 1}</strong> / {numberOfQuestions}
        </p>
        <p className='progress-text  text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white'>
          Points : <strong>{points}</strong> / {maxPoints}
        </p>
      </div>
      
    </header>
  );
};

export default Progress;
