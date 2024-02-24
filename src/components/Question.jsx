import React from 'react';
import Options from './Options';

const Question = ({ question, dispatch, answer }) => {
  return (
    <div className="question-container text-white p-4 rounded-lg my-6">
      <h4 className="text-4xl font-semibold mb-8">{question.question}</h4>
      <Options question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
}

export default Question;
