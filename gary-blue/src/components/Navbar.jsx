import React, {useState} from 'react'

function Navbar({func}) {
  return (
    <div>
      <button onClick={() => func("Home")}>
        Home Page
      </button>
      <button onClick={() => func("Menu")}>
        Menu Page
      </button>
      <button onClick={() => func("Order")}>
        Order Page
      </button>
    </div>
  )
}

export default Navbar