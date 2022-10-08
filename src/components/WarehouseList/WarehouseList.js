import "./WarehouseList.scss";
import searchSymbol from "../../assets/icons/search-24px.svg";
import { WarehouseListItem } from "../index";

import warehouseData from "../../assets/TEMP_DATA/warehouses.json";

export default function WarehouseList() {

  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header">
        <h1 className="warehouse-list__title">Warehouses</h1>
        <input
          className="warehouse-list__search-bar"
          type="text"
          placeholder="Search..."
        ></input>
        <button className="warehouse-list__add-btn">
          &#43;Add New Warehouse
          <img src={searchSymbol} />
        </button>
      </div>
      <ul className="warehouse-list__list">
        {warehouseData.map((warehouse) => (
          <WarehouseListItem
            key={warehouse.id}
            name={warehouse.name}
            address={warehouse.address}
            city={warehouse.city}
            country={warehouse.country}
            contactName={warehouse.contact.name}
            contactPhone={warehouse.contact.phone}
            contactEmail={warehouse.contact.email}
          />
        ))}
      </ul>
    </div>
  );
}
