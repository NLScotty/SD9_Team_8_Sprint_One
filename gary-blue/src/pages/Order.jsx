import React, {useState} from 'react'

function Order() {
  function toggleAddress(value){
    let addressField = document.getElementById("Order_Page_Address")
    if(value==="delivery"){
      addressField.style.display="block"
    }else{
      addressField.style.display="none"
    }
  }
  function toggleMenuItem(value){
    let selectedItem = document.getElementById(value)
    let qty_fries_field = document.getElementById("qty_"+value+"_field")
    if(selectedItem.checked){
      qty_fries_field.style.display="block"
    }else{
      qty_fries_field.style.display="none"
    }
  }
  return (
    <div id='Order_Page_Content_Area'>
      <form>
        <h3 id='Order_Page_Order_Header'>Order Details</h3>
        <div className='Order_Page_Option_Container'>
          <div className='Order_Page_Text_Field'>
            <label>Name</label>
            <input></input>
          </div>
          <div className='Order_Page_Text_Field'>
            <label>Phone Number</label>
            <input></input>
          </div>
          <div className='Order_Page_Radio_Selection'>
            <input type='radio' id='pickup' name='delivery_method' value='pickup' onChange={() => toggleAddress("pickup")}></input>
            <label htmlFor="pickup">Pick Up</label>
            <input type='radio' id='delivery' name='delivery_method' value='delivery' onChange={() => toggleAddress("delivery")}></input>
            <label htmlFor="pickup">Delivery</label>
          </div>
          <div className='Order_Page_Text_Field' id='Order_Page_Address'>
            <label>Address</label>
            <input></input>
          </div>
        </div>
        <h3 id='Order_Page_Food_Header'>Food</h3>
        <div className='Order_Page_Option_Container'>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="pizza" name="pizza" value="pizza" onChange={() => toggleMenuItem("pizza")}></input>
            <label htmlFor="pizza">Pizza</label>
            <div className='Order_Page_Quantity' id="qty_pizza_field">
              <label htmlFor="qty_pizza">qty: </label>
              <input type="number" id="qty_pizza" name="qty_pizza" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="steak" name="steak" value="steak" onChange={() => toggleMenuItem("steak")}></input>
            <label htmlFor="steak">Steak</label>
            <div className='Order_Page_Quantity' id="qty_steak_field">
              <label htmlFor="qty_steak">qty: </label>
              <input type="number" id="qty_steak" name="qty_steak" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="hotdog" name="hotdog" value="hotdog" onChange={() => toggleMenuItem("hotdog")}></input>
            <label htmlFor="hotdog">Hotdog</label>
            <div className='Order_Page_Quantity' id="qty_hotdog_field">
              <label htmlFor="qty_hotdog">qty: </label>
              <input type="number" id="qty_hotdog" name="qty_hotdog" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="hamburger" name="hamburger" value="hamburger" onChange={() => toggleMenuItem("hamburger")}></input>
            <label htmlFor="hamburger">Hamburger</label>
            <div className='Order_Page_Quantity' id="qty_hamburger_field">
              <label htmlFor="qty_hamburger">qty: </label>
              <input type="number" id="qty_hamburger" name="qty_hamburger" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="fries" name="fries" value="fries" onChange={() => toggleMenuItem("fries")}></input>
            <label htmlFor="fries">Fries</label>
            <div className='Order_Page_Quantity' id="qty_fries_field">
              <label htmlFor="qty_fries">qty: </label>
              <input type="number" id="qty_fries" name="qty_fries" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="pasta" name="pasta" value="pasta" onChange={() => toggleMenuItem("pasta")}></input>
            <label htmlFor="pasta">Pasta</label>
            <div className='Order_Page_Quantity' id="qty_pasta_field">
              <label htmlFor="qty_pasta">qty: </label>
              <input type="number" id="qty_pasta" name="qty_pasta" min="1"></input>
            </div>
          </div>
        </div>  
        <h3 id='Order_Page_Drink_Header'>Drinks</h3>
        <div className='Order_Page_Option_Container'>

        </div>
      </form>
    </div>
    
  )
}

export default Order