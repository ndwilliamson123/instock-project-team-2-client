import { Switch, Route } from "react-router-dom";
import {
    WarehousesList,
    AddNewWarehouse,
    SelectedWarehouse,
    EditWarehouse,
} from "../../components/index";

export default function Warehouses() {
    return (
        <Switch>
            <Route
                path="/warehouses/add"
                component={(props) => <AddNewWarehouse {...props} />}
            />
            <Route
                exact
                path="/warehouses/:warehouseID"
                component={(props) => <SelectedWarehouse {...props} />}
            />
            <Route
                path="/warehouses/:warehouseID/edit"
                component={(props) => <EditWarehouse {...props} />}
            />
            <Route
                path="/warehouses"
                component={(props) => <WarehousesList {...props} />}
            />
        </Switch>
    );
}
