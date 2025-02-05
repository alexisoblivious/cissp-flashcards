import React from 'react';
import './Flashcard.css'; // We will create this CSS file next

function Flashcard({ card }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleClick = () => setIsFlipped(!isFlipped);

  return (
    <div className="flashcard" onClick={handleClick}>
      <div className={isFlipped ? "card flipped" : "card"}>
        <div className="card-front">
          {card.question}
        </div>
        <div className="card-back">
          {card.answer}
        </div>
      </div>
    </div>
  );
}

export default Flashcard;
