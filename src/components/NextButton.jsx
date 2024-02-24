import React from 'react';

const NextButton = ({ dispatch, answer, index, numberOfQuestions }) => {
  if (answer === null) return null;

  return (
    <button
      className="next-button bg-purple-600 text-white py-2 px-4 rounded mt-10"
      onClick={() =>
        index < numberOfQuestions - 1
          ? dispatch({ type: 'nextQuestion' })
          : dispatch({ type: 'finish' })
      }
    >
      {index < numberOfQuestions - 1 ? 'Next' : 'Finish'}
    </button>
  );
};

export default NextButton;
