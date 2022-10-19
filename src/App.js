import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import AddEditSubheader from "./components/AddEditSubheader/AddEditSubheader";
import { Footer } from "./components/index";
import { Warehouses, Inventory, PageNotFound } from "./pages/index";

export default function App() {
    return (
        <BrowserRouter>
            <AddEditSubheader title="Add Warehouse" />
            <Switch>
                <Route
                    path="/warehouses"
                    component={(props) => <Warehouses {...props} />}
                />
                <Route
                    path="/inventory"
                    component={(props) => <Inventory {...props} />}
                />
                <Route exact path="/">
                    <Redirect from="/" to={"/warehouses"}></Redirect>
                </Route>
                <Route path="/*" component={PageNotFound} />
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}
