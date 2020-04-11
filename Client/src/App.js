import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Search from './Components/Search';
import Favorites from './Components/Favorites';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Route exact path ={["/"]} component={Home} />
      <Route exact path={["/Search"]} component={Search} />
      <Route path="/Saved" component={Favorites} />
    </div>
  </Router>
  );
}

export default App;
