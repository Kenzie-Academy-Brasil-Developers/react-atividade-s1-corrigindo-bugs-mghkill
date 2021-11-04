import "./style.css";

const Card = ({ card }) => {
  return (
    <div>
      <img src={card.image} alt={card.code} className="card" />;
    </div>
  );
};

export default Card;
