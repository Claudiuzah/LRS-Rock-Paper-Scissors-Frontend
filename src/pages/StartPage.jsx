import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css";  

function Startpage() {
  return (
    <div className="background">
     <div className="group-container">
      <div className="centeredstart">
        <div><img src="public\images\title.png" className="titleimagestart" alt="" />
        <img src="public\video\crown.gif" className="crownstart" />
        </div>
        <Link to="/auth" >
         <button className="buttonstart">
           <span>Play</span>
           <img src="public\video\player.gif" className='playergifstart' />
         </button>
        </Link>
      </div>
      </div>
    </div>  
  );
}

export default Startpage;