import React from 'react';
import './Menu.css';

function Menu() {
  return(
    <div className ="header">

    <div className = "logo">
        MRstudio
    </div>

    <div className= "navmenu">
        <ul>
            <li> <a herf ="#">Home</a></li>
            <li> <a herf ="#">About</a></li>
            <li> <a herf ="#">Type of house</a></li>
            <li> <a herf ="#">Contact</a></li>
            <li> <a herf ="#" class="active">Login</a></li>
        </ul>
    </div>
  </div>
   )
}
export default Menu