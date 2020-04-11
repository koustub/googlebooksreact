import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
        Google Books    <i class="fas fa-book"></i>
       </Link>
   <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
     <span class="navbar-toggler-icon"></span>
   </button>
   <div class="collapse navbar-collapse" id="navbarNav">
     <ul class="navbar-nav">
       <li class="nav-item active">
       <Link to="/Search" className={location.pathname === "/Search" ? "nav-link active" : "nav-link"}>
        Search
       </Link>
        </li>
       <li class="nav-item active">
       <Link to="/Saved" className={location.pathname === "/Saved" ? "nav-link active" : "nav-link"}>
        Saved
       </Link>
       </li>
     </ul>
   </div>
 </nav>

    );
}

export default Navbar;