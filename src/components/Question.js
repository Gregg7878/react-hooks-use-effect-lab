import React, { useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // add useEffect code
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeRemaining(time => time - 1);
    }, 1000);
  
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }
  
    return () => clearTimeout(timer);
  }, [timeRemaining]);
  
  // With these changes, the Question component should now have a countdown timer that resets to 10 seconds after each question and calls the onAnswered callback prop with a value of false when the timer reaches 0.
  
  function handleAnswer(isCorrect) {
    setTimeRemaining(10);
    onAnswered(isCorrect);
  }

  const { id, prompt, answers, correctIndex } = question;

  return (
    <>
      <h1>Question {id}</h1>
      <h3>{prompt}</h3>
      {answers.map((answer, index) => {
        const isCorrect = index === correctIndex;
        return (
          <button key={answer} onClick={() => handleAnswer(isCorrect)}>
            {answer}
          </button>
        );
      })}
      <h5>{timeRemaining} seconds remaining</h5>
    </>
  );
}

export default Question;
