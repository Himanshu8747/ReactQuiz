import React from 'react';
import Options from './Options';

const Question = ({ questions, dispatch, answer }) => {
  return (
    <div className="question-container text-white p-4 rounded-lg my-6">
      <h4 className="text-4xl font-semibold mb-8">{questions.question}</h4>
      <Options question={questions} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
