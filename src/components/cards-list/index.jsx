import { useState } from "react";
import Card from "../card";
import "./style.css";

const CardsList = ({ cardsList }) => {
  const [suitFilter, setSuitFilter] = useState("");
  const [render, setRender] = useState(false);

  const handleSuitFilter = (e) => {
    setSuitFilter(e.target.id);
    setRender(true);
  };

  return (
    <>
      <div className="filter-container">
        <p>Filtrar por naipe</p>
        <div>
          <input
            onClick={handleSuitFilter}
            type="radio"
            id="SPADES"
            name="suit"
          />
          <label for="SPADES">Espadas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="HEARTS"
            name="suit"
          />
          <label for="HEARTS">Copas</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="CLUBS"
            name="suit"
          />
          <label for="CLUBS">Paus</label>

          <input
            onClick={handleSuitFilter}
            type="radio"
            id="DIAMONDS"
            name="suit"
          />
          <label for="DIAMONDS">Ouros</label>
        </div>
      </div>
      <div className="conteiner_deck">
        {!render
          ? cardsList.map((actual, index) => {
              return <Card card={actual} key={index} />;
            })
          : cardsList
              .filter((actual) => actual.suit === suitFilter)
              .map((actual, index) => {
                return <Card card={actual} key={index} />;
              })}
      </div>
    </>
  );
};
export default CardsList;
