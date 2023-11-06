//import needed for hooks
import { useState } from 'react';
//imports for the "pages"
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Order from './pages/Order';
import Complete from './pages/Complete';
// function that runs our application. It changes pages based on the state of "page". It does so by using a hook. Whenever the 
// "page" state changes, it will recall the function using the new value for "page". The state of "page" determines which 
// jsx element/page will be rendered.
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
