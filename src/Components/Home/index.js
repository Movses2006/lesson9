import React, { useState } from "react";
import Card from "../Card";
import "./style.css";
import { API } from "../Card/consts";

const Home = () => {
  const [cards, setCards] = useState(API);

  const handleRemoveButton = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const handleRefresh = () => {
    setCards(API);
  };

  return (
    <>
      <h1>Our Tours</h1>
      <button onClick={handleRefresh}>Refresh</button>
      <div className="card-container">
        {cards.map((card) => (
          <Card
            key={card.id}
            handleRemoveButton={handleRemoveButton}
            {...card}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
