import React, {useState} from 'react'
import hamburgerIcon from '../images/Hamburger_Menu_Icon.png'

function Navbar({func}) {
  function overlayMenu(){
    let overlay = document.querySelector('.Mobile_Nav_Menu_Content');
    if(overlay.style.display === "none"){
      overlay.style.display = "block";
    }else{
      overlay.style.display = "none";
    }
  }
  return (
    <div className='Nav_Bar'>
      <div className="Desktop_Navigation_Bar">
        <div className='Desktop_Nav_Logo'>
          <div className='Desktop_Nav_Logo_Container'>
            Gary Boo's Halloween Diner
          </div>
        </div>
        <div className='Desktop_Nav_Buttons'>
          <div className='Desktop_Nav_Button' onClick={() => func("Home")}>
            <div className='Desktop_Nav_Button_Label'> Home </div>
          </div>
          <div className='Desktop_Nav_Button' onClick={() => func("Menu")}>
            <div className='Desktop_Nav_Button_Label'> Menu </div>
          </div>
          <div className='Desktop_Nav_Button' onClick={() => func("Order")}>
            <div className='Desktop_Nav_Button_Label'> Order </div>
          </div>
        </div>
      </div>
      <div className='Mobile_Nav_Bar'>
        <div className="Mobile_Nav_Dropdown_Menu">
          <button className="Mobile_Nav_Menu_Button" onClick={overlayMenu}>
            <img src={hamburgerIcon} alt="Menu_Icon"/>
          </button>
          <div className="Mobile_Nav_Menu_Content">
            <div className="Mobile_Nav_Menu_Item" onClick={() => {func("Home"); overlayMenu()}}>Home</div>
            <div className="Mobile_Nav_Menu_Item" onClick={() => {func("Menu"); overlayMenu()}}>Menu</div>
            <div className="Mobile_Nav_Menu_Item" onClick={() => {func("Order"); overlayMenu()}}>Order</div>
          </div>
        </div>
        <div className="Mobile_Nav_Bar_Header">
          <label>Gary Boo's Halloween Diner</label>
        </div>
      </div>
    </div>
  )
}

export default Navbar