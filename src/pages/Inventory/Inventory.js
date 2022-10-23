import { Switch, Route } from "react-router-dom";
import {
  InventoryList,
  AddNewItem,
  SelectedItem,
  EditItem,
} from "../../components/index";

export default function Inventory() {
  return (
    <Switch>
      <Route
        path="/inventory/add"
        component={(props) => <AddNewItem {...props} />}
      />
      <Route
        exact
        path="/inventory/:itemID"
        component={(props) => <SelectedItem {...props} />}
      />
      <Route
        path="/inventory/:itemID/edit"
        component={(props) => <EditItem {...props} />}
      />
      <Route
        path="/inventory"
        component={(props) => <InventoryList {...props} />}
      />
    </Switch>
  );
}
