import React, { useState } from "react";
import "./style.css";

const Card = ({id, handleRemoveButton, img, title, text }) => {
  const limit = 100;
  const isSmall = text.length < limit;
  const [isLess, setIsLess] = useState(isSmall);

  const handleTextLength = () => {
    setIsLess(!isLess);
  };

  return (
    <div className="card">
      <div>
        <div className="CardDown">
          <img src={img} alt={title} />
          <h5>{title}</h5>
          <p>
            {isLess || isSmall ? text : `${text.slice(0, limit)}...`}
          </p>
          <button className="readMore" onClick={() => handleTextLength(id)}>
            {isLess || isSmall ? "Read More" : "Read Less"}
          </button>
          <button onClick={() => handleRemoveButton(id)}>Not Interested</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
 