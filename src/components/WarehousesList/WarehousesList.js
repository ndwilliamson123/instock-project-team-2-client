import { Link, Switch, Route } from "react-router-dom";
import {
  WarehousesList,
  AddNewWarehouse,
  SelectedWarehouse,
  EditWarehouse,
  DeleteWarehouse,
} from "../../components/index";

export default function WareHousesList() {
  console.log("warehouses list");
  const warehouseName = "Manhattan";
  return (
    <>
      <h1>Multiple warehouses here</h1>
      <Link to="/warehouses/add">Click here to add a warehouse</Link>
      <Switch>
        <Route
          path="/warehouses/:warehouseName/delete"
          component={(props) => <DeleteWarehouse {...props} />}
        />
      </Switch>
      <div>
        <Link to={`/warehouses/${warehouseName}`}>
          <p>Manhattan</p>
        </Link>
        <Link to={`/warehouses/${warehouseName}/delete`}>
          Click Me to delete
        </Link>
        <Link to={`/warehouses/${warehouseName}/edit`}>Click Me to edit</Link>
      </div>
    </>
  );
}
