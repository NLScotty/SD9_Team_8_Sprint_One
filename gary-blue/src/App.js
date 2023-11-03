import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Complete from './pages/Complete';

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
        <Order func = {changePage}></Order>
      </>
    );
  }
  else if(page === "Complete"){
    return (
      <>
        <Navbar func = {changePage}></Navbar>
        <Complete func = {changePage}></Complete>
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
