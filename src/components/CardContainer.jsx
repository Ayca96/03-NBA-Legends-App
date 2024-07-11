import React from "react";
import { useState } from "react";

const CardContainer = ({ veri }) => {







  return (
    <div className="container">
      {veri.map((card, index) => (
        <div className="player" key={index}>
          <div className="image">
            <img src={card.img} alt={card.name} />
          </div>
          <h2>{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
