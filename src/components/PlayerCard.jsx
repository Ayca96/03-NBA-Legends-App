import React from 'react'

const PlayerCard = ({data}) => {
  return (


    <div>
    {data.map((player,index)=>{
      return (
      <div key={index}>

     <ol>
      <li>🏀{player.statistics}</li>
     </ol>

      </div>
    )})}



    </div>
  )
}

export default PlayerCard