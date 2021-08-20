import React from 'react';
import ChallengeDetailsCard from '../ChallengeDetailsCard/ChallengeDetailsCard';
import TypingChallenge from '../TypingChallenge/TypingChallenge';
import './TypingChallengeContainer.css';

const TypingChallengeContainer = ({
  selectedParagraph,
  words,
  characters,
  wpm,
  timeRemaining,
  timerStarted,
  testInfo,
  onInputChange,
}) => {
  return (
    <div className='typing-challenge-container'>
      {/* Detail Section */}
      <div className='details-container'>
        {/* words */}
        <ChallengeDetailsCard cardName='Words' cardValue={words} />

        {/* characters */}
        <ChallengeDetailsCard cardName='Characters' cardValue={characters} />

        {/* Speed */}
        <ChallengeDetailsCard cardName='Speed' cardValue={wpm} />
      </div>

      {/* The REAL challenge */}
      <div className='typewriter-container'>
        <TypingChallenge
          selectedParagraph={selectedParagraph}
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          testInfo={testInfo}
          onInputChange={onInputChange}
        />
      </div>
    </div>
  );
};

export default TypingChallengeContainer;
