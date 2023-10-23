import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';

function App() {
  const [page, setPage] = useState("Home");
  function changePage(newPage){
    setPage(newPage)
  }
  if(page === "Home"){
    return (
      <>
        <Navbar func = {changePage}></Navbar>
        <Home></Home>
      </>
    );
  }
  else if(page === "Menu"){
    return (
      <>
        <Navbar func = {changePage}></Navbar>
        <Menu></Menu>
      </>
    );
  }
  else if(page === "Order"){
    return (
      <>
        <Navbar func = {changePage}></Navbar>
        <Order></Order>
      </>
    );
  }
  else{
    return (
      <p>
        Page Not Found
      </p>
    )
  }
}

export default App;
