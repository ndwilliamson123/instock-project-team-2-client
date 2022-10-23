import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { DeleteWarehouse } from "./components";

import './App.scss';


import InventoryAll from "./components/InventoryAll/InventoryAll";
import WareHousesList from "./components/WarehousesList/WarehousesList";
import DeleteWH from './components/DeleteWarehouse/DeleteWarehouse';

export default function App() {
  return (
    <>
      <Router>
        
        <div className='main'>

          <Switch>
            <Route exact path="/inventory">
              <InventoryAll />
            </Route>

            <Route exact path="/warehouses">
              <WareHousesList />
            </Route>

            <Route exact path="/warehouses/:warehouseName/:warehouseId/delete">
              <DeleteWH />
            </Route>

          </Switch>

        </div>
        
      </Router>
    </>
  );
}