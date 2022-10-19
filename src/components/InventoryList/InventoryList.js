import { Link, Route } from "react-router-dom";
import { DeleteItem } from "../../components/index";

export default function InventoryList() {
  console.log("inventory list");
  const itemName = "Television";
  return (
    <>
      <h1>Inventory List</h1>
      <Link to="/inventory/add">Click here to add an item</Link>
      <Route
        path={`/inventory/:${itemName}/delete`}
        component={(props) => <DeleteItem {...props} />}
      />
      <div>
        <Link to={`/inventory/${itemName}`}>
          <p>{itemName}</p>
        </Link>
        <Link to={`/inventory/${itemName}/delete`}>Click Me to delete</Link>
        <Link to={`/inventory/${itemName}/edit`}>Click Me to edit</Link>
      </div>
    </>
  );
}
