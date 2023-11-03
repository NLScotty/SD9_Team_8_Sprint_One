function Home(){

  return(
  <div className="Home_Page">
    <div className="Home_Page_Content_Area">
      <h2>Welcome to</h2>
      <h1 className="Fancy_Font Make_It_Big">Gary Boo's Halloween Diner</h1>
      <h2>Open From:</h2>
      <div className="Home_Page_Time_Table">
        <div className="Home_Page_Time_Item"> 
          Monday to Friday:<br></br>
          8:00 AM to 12:00 PM
        </div>
        <div className="Home_Page_Time_Item"> 
          Saturday to Sunday:<br></br>
          11:00 AM to 5:00 PM
        </div>
      </div>
    </div>
      
  </div>
  );
}

export default Home;