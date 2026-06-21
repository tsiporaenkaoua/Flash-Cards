import { useState } from "react";
import { datacards } from "./data/datacards";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const nextCard = () => {
    if (index < datacards.length - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="container">
      <h1>Flash Cards 🚀</h1>

      <ProgressBar current={index} total={datacards.length} />

      <div className="card-container">
        <FlashCard card={datacards[index]} />

        <Navigation
          prevCard={prevCard}
          nextCard={nextCard}
        />
      </div>
    </div>
  );
}

export default App;