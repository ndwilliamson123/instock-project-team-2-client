import { Link, Route } from "react-router-dom";
import { DeleteWarehouse } from "../../components/index";

export default function WareHousesList() {
  console.log("warehouses list");
  const warehouseName = "Manhattan";
  return (
    <>
      <h1>Warehouse List</h1>
      <Link to="/warehouses/add">Click here to add a warehouse</Link>
      <Route
        path="/warehouses/:warehouseName/delete"
        component={(props) => <DeleteWarehouse {...props} />}
      />
      <div>
        <Link to={`/warehouses/${warehouseName}`}>
          <p>{warehouseName}</p>
        </Link>
        <Link to={`/warehouses/${warehouseName}/delete`}>
          Click Me to delete
        </Link>
        <Link to={`/warehouses/${warehouseName}/edit`}>Click Me to edit</Link>
      </div>
    </>
  );
}
