import "./WarehouseList.scss";
import { WarehouseListItem } from "../index";

import warehouseData from "../../assets/TEMP_DATA/warehouses.json";

export default function WarehouseList() {
  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
          <input
           className='warehouse-list__search-bar'
            type="text"
            placeholder="Search..."
          ></input>
        <button className="warehouse-list__add-btn">
          &#43;Add New Warehouse
        </button>
      </div>
      <ul className="warehouse-list__list">
        {warehouseData.map((warehouse) => (
          <WarehouseListItem
            key={warehouse.id}
            warehouse={warehouse}
          />
        ))}
      </ul>
    </div>
  );
}
