import React, {useState} from 'react'

import fries from '../images/menu_items/fries.jpg'
import touton from '../images/menu_items/fried_dough.jpg'
import pizza from '../images/menu_items/pizza.jpg'
import steak from '../images/menu_items/steak.jpg'
import hamburger from '../images/menu_items/hamburger.jpg'
import hotdog from '../images/menu_items/hotdog.jpg'
import water from '../images/menu_items/water.jpg'
import pop from '../images/menu_items/pop.jpg'
import lemonade from '../images/menu_items/lemonade.jpg'
import iced_tea from '../images/menu_items/iced_tea.jpg'
import milk from '../images/menu_items/milk.jpg'
import coffee from '../images/menu_items/coffee.jpg'

function Menu() {
  function toggleDisplay(item){
    let selected = document.getElementById(item);
    if(selected.style.display === "block"){
      selected.style.display = "none"
    }else{
      selected.style.display = "block"
    }
  }
  return (
    <>
      <h1 className='Menu_Page_Header Make_It_Big Fancy_Font'>Gary Boo's Halloween Diner Menu</h1>
        <h2 className='Menu_Page_Menu_Header '>Food</h2>
        <div className='Menu_Page_Menu_Item_Container'>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("pizza")}>
            <h3>Pizza</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="pizza">
              <img className = 'Menu_Page_Menu_Item_Image' src={pizza}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("steak")}>
            <h3>Steak</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="steak">
              <img className = 'Menu_Page_Menu_Item_Image' src={steak}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("hamburger")}>
            <h3>Hamburger</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="hamburger">
              <img className = 'Menu_Page_Menu_Item_Image' src={hamburger}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("hotdog")}>
            <h3>Hotdog</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="hotdog">
              <img className = 'Menu_Page_Menu_Item_Image' src={hotdog}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("fries")}>
            <h3>Fries</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="fries">
              <img className = 'Menu_Page_Menu_Item_Image' src={fries}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("toutons")}>
            <h3>Toutons</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="toutons">
              <img className = 'Menu_Page_Menu_Item_Image' src={touton}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
        </div>
        <h2 className='Menu_Page_Menu_Header'>Drinks</h2>
        <div className='Menu_Page_Menu_Item_Container'>
        <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("water")}>
            <h3>Bottled Water</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="water">
            <img className = 'Menu_Page_Menu_Item_Image' src={water}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("pop")}>
            <h3>Pop</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="pop">
            <img className = 'Menu_Page_Menu_Item_Image' src={pop}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("coffee")}>
            <h3>Coffee</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="coffee">
            <img className = 'Menu_Page_Menu_Item_Image' src={coffee}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("lemonade")}>
            <h3>Lemonade</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="lemonade">
            <img className = 'Menu_Page_Menu_Item_Image' src={lemonade}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("iced_tea")}>
            <h3>Iced Tea</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="iced_tea">
            <img className = 'Menu_Page_Menu_Item_Image' src={iced_tea}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
          <div className='Menu_Page_Menu_Item' onClick={()=>toggleDisplay("milk")}>
            <h3>Milk</h3>
            <div className='Menu_Page_Menu_Item_Overlay' id="milk">
            <img className = 'Menu_Page_Menu_Item_Image' src={milk}></img>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste unde esse cumque recusandae eligendi autem doloremque nostrum laboriosam assumenda hic eos ratione ipsum ullam, sint minus, fugit blanditiis voluptas. Veniam.</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Menu