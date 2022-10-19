import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Footer } from "./components/index";
import { Warehouses, Inventory, PageNotFound } from "./pages/index";

export default function App() {
    return (
        <BrowserRouter>
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
