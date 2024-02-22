import React from 'react';

const Options = ({ question, dispatch, answer }) => {
  const hasAnswered = answer !== null;

  return (
    <div className='options-container flex justify-evenly'>
      {question.options.map((option, index) => (
        <button
          className={`bg-purple-500 hover:bg-purple-600 text-white m-4 py-2 px-4 rounded focus:outline-none focus:ring focus:border-blue-300 btn-option ${index === answer ? 'selected' : ''} ${
            hasAnswered
              ? index === question.correctOption
                ? 'correct'
                : 'wrong'
              : ''
          } `}
          key={option}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
          disabled={hasAnswered}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
