
import React ,{Component} from 'react';
import './App.css';



import Top from './Components/Top/Top'; 
import Menu from './Components/Menu/Menu'; 


import MiddleBox from './Components/MiddleBox/MiddleBox';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Menu></Menu>


        {/* <MiddleBox></MiddleBox>
        <Footer></Footer>
        
        <Top></Top> */}

      </div>
    )
  }
}  
export default App;


























































































// function App() {
//   return (   
  
    
     

// <div class="wrapper">
      {/* <div class="top-header">
            <div class="top-header-content"> 
            <div class="header-logo">dribbble</div> 
            <div class="header-pragraph">
            <ul>
                  <li> <a herf ="#">Hotel and Resort bookinglanding page </a></li>
                  <li> <a herf ="#">by masud rana</a></li>
            </ul>      
                </div>  
           </div>   
      </div> */}
      {/* <div class ="container">
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

        <div class = "content-image">
            <div class="main-image">
            <div class="topleft"><strong>enjoy your</strong> </div>
            <div class="topleft"><strong> dream vacation</strong> </div>
            <div class="topleft"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p></div>
            <div class="topleft"><h3> warwick Hotels & resorts</h3> </div>
            </div>

        </div>

        <div class="middle-box">
          <div class="middle-box-inside">
            <div class="left-box">
              <h3>facilities</h3>
              <h4 class="text-color2">see more</h4>
              <img src={process.env.PUBLIC_URL+'/img/s1.jpg'} alt="s-image-1"></img>
               <img src={process.env.PUBLIC_URL+'/img/s2.jpg'} alt="s-image-2"></img>
              <img src={process.env.PUBLIC_URL+'/img/s3.jpg'} alt="s-image-3"></img>
              <img src={process.env.PUBLIC_URL+'/img/s4.jpg'} alt="s-image-4"></img> 
              <p>tools1</p>
              <p>tools2</p>
              <p>tools3</p>
              <p>tools4</p>
            </div>
            <div  class="middle-box">
            <h3>Hotels For You</h3>
            <h4 class="text-color3">5Days 6Nights</h4>
            <h4 class="text-color4">USD$506.00</h4>
            </div>
            <div class="right-box"></div>
          </div>
        
        </div>

        <div class="footer-title"><h1>Entire city of choice</h1></div>

        <div class="box-area">
          <div class="box-row">
            <div class= "single-box">
              <div class="img-area">
                <img src={process.env.PUBLIC_URL+'/img/1.jpg'} alt="footer-image-1"></img>
                
              </div>
              <div class="img-text">
                <span class="header-text"><strong class="text-color">$600000  </strong></span>
                <p>Booking ID:9837432</p>
              </div>
            </div>

            <div class= "single-box">
              <div class="img-area">
              <img class=".left-box img" src={process.env.PUBLIC_URL+'/img/2.jpg'} alt="footer-image-2"></img>
              </div>
              <div class="img-text">
                <span class="header-text"><strong class="text-color">$500000 </strong></span>
                <p> Booking ID:9837432</p>
              </div>
            </div>

            <div class= "single-box">
              <div class="img-area">
              <img src={process.env.PUBLIC_URL+'/img/3.jpg'} alt="footer-image-3"></img>
              </div>
              <div class="img-text">
                <span class="header-text" ><strong class="text-color">$400000</strong></span>
                <p>Booking ID:9837432</p>
              </div>
            </div>
          </div>
          <div class="buttom-box"></div>
        </div>

     


      </div>

  </div>  
  );
}
export default App;
   */}