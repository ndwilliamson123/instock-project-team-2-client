import "./WarehouseList.scss";
import sortSymbol from "../../assets/icons/sort-24px.svg";
import { WarehouseListItem } from "../index";

import warehouseData from "../../assets/TEMP_DATA/warehouses.json";

export default function WarehouseList() {
  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <div>
          <input
            className="warehouse-list__search-bar"
            type="text"
            placeholder="Search..."
          ></input>
          <button className="warehouse-list__add-btn">
            &#43;Add New Warehouse
          </button>
        </div>
      </div>
      <div className="warehouse-list__columns">
        <div>
          <h3>WAREHOUSE</h3>
          <img src={sortSymbol} alt="delete button" />
        </div>
        <div>
          <h3>ADDRESS</h3>
          <img src={sortSymbol} alt="delete button" />
        </div>
        <div>
          <h3>CONTACT NAME</h3>
          <img src={sortSymbol} alt="delete button" />
        </div>
        <div>
          <h3>CONTACT INFORMATION</h3>
          <img src={sortSymbol} alt="delete button" />
        </div>
        <div>
          <h3>ACTIONS</h3>
        </div>
      </div>
      <ul className="warehouse-list__list">
        {warehouseData.map((warehouse) => (
          <WarehouseListItem key={warehouse.id} warehouse={warehouse} />
        ))}
      </ul>
    </div>
  );
}
