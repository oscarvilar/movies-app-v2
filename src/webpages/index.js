import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './home';
import Favoritos from './favoritos';
const Webpages = () => {
    return(
        <Router>
            <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/favoritos" element={<Favoritos />}></Route> 
        </Routes>
        </Router>
    );
};
export default Webpages;