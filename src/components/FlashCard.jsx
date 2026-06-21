import { useState, useEffect } from "react";

function FlashCard({ card }) {
  const [showAnswer, setShowAnswer] = useState(false);

  // Qd card change on update on met showAnswer a false pour montrer toujours la question
  useEffect(() => {setShowAnswer(false); }, [card]);


  return (
    <div className="flashcard" onClick={() => setShowAnswer(!showAnswer)}>
       <h2>{showAnswer ? card.answer : card.question}</h2>
    </div>
  );
}

export default FlashCard;