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
import { RecoilRoot } from 'recoil';
const Webpages = () => {
    return(
        <Router>
            <RecoilRoot>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route> 
            </Routes>
            </RecoilRoot>
        </Router>
    );
};
export default Webpages;