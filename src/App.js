import React from 'react';
import './styles.css';
import image2 from './assets/image2.jpg'

function App() {
  return (
    <div className="App">
      <div className="content">
        <h1>Wedding Invitation</h1>

        <div>
          <img src={image2} alt="Wedding Invitation" />
        </div>

        <div className="Invitation">
          <p>WE WOULD LIKE TO REQUEST </p>
          <p>THE PLEASURE OF YOUR COMPANY</p>
          <p> AT THE CELEBRATION OF OUR MARRIAGE</p>
        </div>

        <div className="Name"> 
          <p>Vũ Quang Minh</p>
          <p className="and"> and </p>
          <p> Đặng Vân Anh </p>
        </div>

        <div className='LocaBold'>
          <p>SEN EVENT & WEDDING</p>
        </div>

        <div className="Location">
          <p>614 LAC LONG QUAN, TAY HO, HA NOI</p>
        </div>

        <div className="Register">
          <p>Register</p>
        </div>
      </div>
    </div>
  );
}

export default App;
