import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.scss';

import InventoryAll from "./components/InventoryAll/InventoryAll";

export default function App() {
  return (
    <>
      <Router>
        
        <div className='main'>

          <Switch>
            <Route exact path="/inventory">
              <InventoryAll />
            </Route>

          </Switch>

        </div>
        
      </Router>
    </>
  );
}