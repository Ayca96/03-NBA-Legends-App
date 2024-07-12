import React from "react";
import { useState } from "react";
import PlayerCard  from "./PlayerCard";

const CardContainer = ({ veri }) => {

const [selectedPlayer, setSelectedPlayer] = useState(null);
const [toggle, setToggle] = useState(true)

const changeAll = () =>{
setToggle(!toggle);
if (!toggle) {
  setSelectedPlayer({
    name: veri.name,
    image:veri.img,
    
  }) 
}else{
  setSelectedPlayer(veri.statistics)

}
}


  return (
    <div className="container">
      {veri.map((card, index) => (
        <div onClick={()=>changeAll(index)} className="player" key={index}>
          <div className="image">
            <img src={card.img} alt={card.name} />
          </div>
          <h2>{card.name}</h2>
        </div>
      ))}
      { toggle && (
        <PlayerCard datei={[selectedPlayer]} />
      )}
    </div>
  );
};

export default CardContainer;
