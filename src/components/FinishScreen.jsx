import React from 'react';

const FinishScreen = ({ points, maxPoints, highscore, dispatch }) => {

  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = "🥇";
  } else if (percentage >= 90) {
    emoji = "🥈";
  } else if (percentage >= 80) {
    emoji = "🥉";
  } else if (percentage >= 70) {
    emoji = "🔰";
  } else if (percentage >= 60) {
    emoji = "5️⃣";
  } else if (percentage >= 50) {
    emoji = "6️⃣";
  } else if (percentage >= 40) {
    emoji = "7️⃣";
  } else {
    emoji = "😢";
  }

  return (
    <div className="finish-screen text-center bg-gray-800 text-white py-10">
      <p className='result text-4xl mb-4'>
        <span className="text-5xl">{emoji}</span> You Scored <strong>{points}</strong> / {maxPoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore text-xl mb-4'>Highscore: {highscore} points</p>
      <button className="btn-btn-ui bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded" onClick={() => dispatch({ type: "restart" })}>Restart Quiz</button>
    </div>
  )
}

export default FinishScreen;
