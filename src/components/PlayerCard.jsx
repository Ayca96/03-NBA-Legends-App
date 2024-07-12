import React from 'react'
import "../App.css";

const PlayerCard = ({datei}) => {
  return (


    <div className='container'>
    {datei.map((player,index)=>{
      return (
        
      <div className='playerCard' key={index}>

     <ol>
      <li>🏀{player.statistics[0]}</li>
      <li>🏀{player.statistics[1]}</li>
      <li>🏀{player.statistics[2]}</li>
      <li>🏀{player.statistics[3]}</li>
     <br /> <br /> <br /><br /> <br />
     <hr />
      
     </ol>

      </div>
      
    )})}



    </div>
  )
}

export default PlayerCard