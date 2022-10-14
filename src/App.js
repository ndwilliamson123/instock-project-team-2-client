import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import './App.scss';

import Header from './components/Header/Header';
import PageTitle from './components/PageTitle/PageTitle';
import Footer from './components/Footer/Footer';
import Welcome from "./components/Mockup/Welcome";
import Popup from "./components/Mockup/Popup";
import Modal from "./components/Mockup/Modal";

export default function App() {
  return (
    <>
      <Router>
        
        <Header />
        
        <div className='main'>

          <Switch>
            <Route exact path="/">
              <PageTitle pgtitle='Welcome' />
              <Welcome />
            </Route>

            <Route exact path="/popup">
              <PageTitle pgtitle='Pop-Up Modal' />
              <Popup />
              <Modal />
            </Route>
          </Switch>

        </div>
        

        <Footer />
      </Router>
    </>
  );
}
