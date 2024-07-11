import React from 'react';
import NBA from "../../src/assets/nba-logo.png"


const Header = () => {
  return (
    <div className='header'>

    <h1><img src={NBA} alt="RESIM" /></h1>
    <h2>NBA <span className='legends'>LEGENDS</span></h2>
   
    <input id='input' type="text" placeholder='   Search Player...' />
  
    

    </div>
  )
}

export default Header