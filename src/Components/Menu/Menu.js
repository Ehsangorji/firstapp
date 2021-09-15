import React from 'react';
import './Menu.css';

function Menu() {
  return(
    <div class ="header">

    <div class = "logo">
        MRstudio
    </div>

    <div class= "navmenu">
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