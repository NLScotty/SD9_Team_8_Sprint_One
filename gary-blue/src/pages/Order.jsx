import React, {useState} from 'react'

function Order({func}) {
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
  function displayOrderReview(){
    let menuItems=["pizza","steak","hotdog","hamburger","fries","toutons","water","pop","coffee","lemonade","iced_tea","milk"]
    let errorMessageBox = document.querySelector(".Order_Page_Error_Box")
    errorMessageBox.innerHTML = ""
    errorMessageBox.style.display= "none"

    let name = document.getElementById("name").value;
    if(name === null || name === ""){
      errorMessageBox.innerHTML = "Error: Please enter a name"
      errorMessageBox.style.display= "block"
      return
    }
    let phone = document.getElementById("phone").value;
    if(phone === null || phone === ""){
      errorMessageBox.innerHTML = "Error: Please enter a phone number"
      errorMessageBox.style.display= "block"
      return
    }
    let arrivalMethod = ""
    try{
      arrivalMethod = document.querySelector("input[name='delivery_method']:checked").value
    }catch{
      errorMessageBox.innerHTML = "Error: Please select an arrival method"
      errorMessageBox.style.display= "block"
      return
    }
    let address = ""
    if(arrivalMethod === null || arrivalMethod === ""){
      errorMessageBox.innerHTML = "Error: Please select an arrival method"
      errorMessageBox.style.display= "block"
      return
    }else if(arrivalMethod === "delivery"){
      address = document.getElementById("address").value
      if(address === null || address == ""){
        errorMessageBox.innerHTML = "Error: Please enter an address"
        errorMessageBox.style.display= "block"
        return
      }
    }
    let result = `<h3>Order Details</h3>`
    result += `Name: ${name} <br> Phone: ${phone} <br>`
    if(address!==""){
      result += `Address: ${address} <br>`
    }
    let flag = false;
    result += `<hr>`
    for(let i = 0; i < menuItems.length; i++){
      let item = menuItems[i];
      if(document.getElementById(item).checked){
        let qty = document.getElementById("qty_"+item)
        if(qty!=null && qty.value != ""){
          result += `${document.getElementById(item).value} x ${qty.value}<br>`;
          flag = true;
        }
      }
    }
    if (!flag) {
      errorMessageBox.innerHTML = "Error: Select atleast 1 item"
      errorMessageBox.style.display= "block"
      return
    }
    document.querySelector(".Order_Page_Order_Overlay_Order_Details").innerHTML=result
    document.querySelector(".Order_Page_Order_Overlay").style.display="block"
  }
  function cancelOrder(){
    document.querySelector(".Order_Page_Order_Overlay").style.display="none"
  }
  function confirmOrder(){
    func("Complete")
  }
  return (
    <div id='Order_Page_Content_Area'>
      <form onSubmit={e => e.preventDefault()}>
        <h3 id='Order_Page_Order_Header'>Order Details</h3>
        <div className='Order_Page_Details_Container'>
          <div className='Order_Page_Text_Field'>
            <label>Name: </label>
            <input id='name'></input>
          </div>
          <div className='Order_Page_Text_Field'>
            <label>Phone Number: </label>
            <input id='phone'></input>
          </div>
          <div className='Order_Page_Radio_Selection'>
            <label>Arival Method  </label> <br></br>
            <input type='radio' id='pickup' name='delivery_method' value='pickup' onChange={() => toggleAddress("pickup")}></input>
            <label htmlFor="pickup">Pick Up</label>
            <input type='radio' id='delivery' name='delivery_method' value='delivery' onChange={() => toggleAddress("delivery")}></input>
            <label htmlFor="pickup">Delivery</label>
          </div>
          <div className='Order_Page_Text_Field' id='Order_Page_Address'>
            <label>Address: </label>
            <input id='address'></input>
          </div>
        </div>
        <h3 id='Order_Page_Food_Header'>Food</h3>
        <div className='Order_Page_Option_Container'>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="pizza" name="pizza" value="Pizza" onChange={() => toggleMenuItem("pizza")}></input>
            <label htmlFor="pizza">Pizza</label>
            <div className='Order_Page_Quantity' id="qty_pizza_field">
              <label htmlFor="qty_pizza">qty: </label>
              <input type="number" id="qty_pizza" name="qty_pizza" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="steak" name="steak" value="Steak" onChange={() => toggleMenuItem("steak")}></input>
            <label htmlFor="steak">Steak</label>
            <div className='Order_Page_Quantity' id="qty_steak_field">
              <label htmlFor="qty_steak">qty: </label>
              <input type="number" id="qty_steak" name="qty_steak" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="hotdog" name="hotdog" value="Hotdog" onChange={() => toggleMenuItem("hotdog")}></input>
            <label htmlFor="hotdog">Hotdog</label>
            <div className='Order_Page_Quantity' id="qty_hotdog_field">
              <label htmlFor="qty_hotdog">qty: </label>
              <input type="number" id="qty_hotdog" name="qty_hotdog" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="hamburger" name="hamburger" value="Hamburger" onChange={() => toggleMenuItem("hamburger")}></input>
            <label htmlFor="hamburger">Hamburger</label>
            <div className='Order_Page_Quantity' id="qty_hamburger_field">
              <label htmlFor="qty_hamburger">qty: </label>
              <input type="number" id="qty_hamburger" name="qty_hamburger" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="fries" name="fries" value="Fries" onChange={() => toggleMenuItem("fries")}></input>
            <label htmlFor="fries">Fries</label>
            <div className='Order_Page_Quantity' id="qty_fries_field">
              <label htmlFor="qty_fries">qty: </label>
              <input type="number" id="qty_fries" name="qty_fries" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="toutons" name="toutons" value="Toutons" onChange={() => toggleMenuItem("toutons")}></input>
            <label htmlFor="toutons">Touton</label>
            <div className='Order_Page_Quantity' id="qty_toutons_field">
              <label htmlFor="qty_toutons">qty: </label>
              <input type="number" id="qty_toutons" name="qty_toutons" min="1"></input>
            </div>
          </div>
        </div>  
        <h3 id='Order_Page_Drink_Header'>Drinks</h3>
        <div className='Order_Page_Option_Container'>
        <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="water" name="water" value="Bottled Water" onChange={() => toggleMenuItem("water")}></input>
            <label htmlFor="water">Bottled Water</label>
            <div className='Order_Page_Quantity' id="qty_water_field">
              <label htmlFor="qty_water">qty: </label>
              <input type="number" id="qty_water" name="qty_water" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="pop" name="pop" value="Pop" onChange={() => toggleMenuItem("pop")}></input>
            <label htmlFor="pop">Pop</label>
            <div className='Order_Page_Quantity' id="qty_pop_field">
              <label htmlFor="qty_pop">qty: </label>
              <input type="number" id="qty_pop" name="qty_pop" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="coffee" name="coffee" value="Coffee" onChange={() => toggleMenuItem("coffee")}></input>
            <label htmlFor="coffee">Coffee</label>
            <div className='Order_Page_Quantity' id="qty_coffee_field">
              <label htmlFor="qty_coffee">qty: </label>
              <input type="number" id="qty_coffee" name="qty_coffee" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="lemonade" name="lemonade" value="Lemonade" onChange={() => toggleMenuItem("lemonade")}></input>
            <label htmlFor="lemonade">Lemonade</label>
            <div className='Order_Page_Quantity' id="qty_lemonade_field">
              <label htmlFor="qty_lemonade">qty: </label>
              <input type="number" id="qty_lemonade" name="qty_lemonade" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="iced_tea" name="iced_tea" value="Iced Tea" onChange={() => toggleMenuItem("iced_tea")}></input>
            <label htmlFor="iced_tea">Iced Tea</label>
            <div className='Order_Page_Quantity' id="qty_iced_tea_field">
              <label htmlFor="qty_iced_tea">qty: </label>
              <input type="number" id="qty_iced_tea" name="qty_iced_tea" min="1"></input>
            </div>
          </div>
          <div className='Order_Page_Menu_Item'>
            <input type="checkbox" id="milk" name="milk" value="Milk" onChange={() => toggleMenuItem("milk")}></input>
            <label htmlFor="milk">Milk</label>
            <div className='Order_Page_Quantity' id="qty_milk_field">
              <label htmlFor="qty_milk">qty: </label>
              <input type="number" id="qty_milk" name="qty_milk" min="1"></input>
            </div>
          </div>
        </div>
        <div className = 'Order_Page_Error_Box'></div>
        <div className='Order_Page_Button' onClick={() => displayOrderReview()}>Submit</div>
        <div className='Order_Page_Order_Overlay'>
          <div className='Order_Page_Order_Overlay_Content'>
            <div className='Order_Page_Order_Overlay_Order_Details'>
              Error on processing request
            </div>
            <div className='Overlay_Button_Container'>
              <div className='Order_Page_Button' onClick={() => confirmOrder()}> Confirm </div>
              <div  className='Order_Page_Button' onClick={() => cancelOrder()}>Cancel</div>
            </div>
          </div>
        </div>
      </form>
    </div>
    
  )
}

export default Order