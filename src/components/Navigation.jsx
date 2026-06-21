function Navigation({ prevCard, nextCard }) {
  return (
    <div className="navigation">
      <button onClick={prevCard}>
        ‹ Previous
      </button>

      <button className="answer-btn">
        Show Answer
      </button>

      <button onClick={nextCard}>
        Next ›
      </button>
    </div>
  );
}

export default Navigation;