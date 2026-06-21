import { useState, useEffect } from "react";
import FlashCard from "./components/FlashCard";
import Navigation from "./components/Navigation";
import ProgressBar from "./components/ProgressBar";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  // 📡 Chargement des données depuis FastAPI
  useEffect(() => {
    fetch("http://127.0.0.1:8000/questions")
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        setIndex(0); // reset index au cas où
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur API :", err);
        setLoading(false);
      });
  }, []);

  const nextCard = () => {
    if (index < cards.length - 1) setIndex(index + 1);
  };

  const prevCard = () => {
    if (index > 0) setIndex(index - 1);
  };

  //  Loading state
  if (loading) {
    return (
      <div className="container">
        <h1>Flash Cards 🚀</h1>
        <p>Chargement des cartes...</p>
      </div>
    );
  }

  //  Aucun résultat
  if (cards.length === 0) {
    return (
      <div className="container">
        <h1>Flash Cards 🚀</h1>
        <p>Aucune carte disponible</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Flash Cards 🚀</h1>

      <ProgressBar current={index} total={cards.length} />

      <div className="card-container">
        <FlashCard card={cards[index]} />

        <Navigation
          prevCard={prevCard}
          nextCard={nextCard}
        />
      </div>
    </div>
  );
}

export default App;