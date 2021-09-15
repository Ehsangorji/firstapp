import React from 'react';
import './MiddleBox.css';

function middleBox() {
  return(
   
        <div className="middle-box">
          <div className="middle-box-inside">
            <div className="left-box">
              <h3>facilities</h3>
              <h4 className="text-color2">see more</h4>
              <img src={process.env.PUBLIC_URL+'/img/s1.jpg'} alt="s-image-1"></img>
               <img src={process.env.PUBLIC_URL+'/img/s2.jpg'} alt="s-image-2"></img>
              <img src={process.env.PUBLIC_URL+'/img/s3.jpg'} alt="s-image-3"></img>
              <img src={process.env.PUBLIC_URL+'/img/s4.jpg'} alt="s-image-4"></img> 
              <p>tools1</p>
              <p>tools2</p>
              <p>tools3</p>
              <p>tools4</p>
            </div>
            <div  className="middle-box">
            <h3>Hotels For You</h3>
            <h4 className="text-color3">5Days 6Nights</h4>
            <h4 className="text-color4">USD$506.00</h4>
            </div>
            <div className="right-box"></div>
          </div>
        
        </div>
   
  
   )
}
export default middleBox