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
import Header from '../components/Header';
import Footer from '../components/footer/Footer'
const Webpages = () => {
    return(
        <Router>
            <RecoilRoot>
            <Header/>
            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route path="/favoritos" element={<Favoritos />}></Route> 
            </Routes>
            <Footer/>
            </RecoilRoot>
        </Router>
    );
};
export default Webpages;