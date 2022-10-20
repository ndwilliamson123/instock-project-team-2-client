import "./WarehousesList.scss";
import { Route } from "react-router-dom";
import {
    DeleteWarehouse,
    MainSubHeader,
    WarehousesListColumns,
    WarehousesListItem,
} from "../index";

//importing temp data until connected to backend
import warehouseData from "../../assets/TEMP_DATA/warehouses.json";

export default function WareHousesList() {
    return (
        <>
            <Route
                path="/warehouses/:warehouseName/delete"
                component={(props) => <DeleteWarehouse {...props} />}
            />
            <div className="warehouse-list">
                <MainSubHeader
                    title="Warehouses"
                    buttonText={"+ Add New Warehouse"}
                />
                <WarehousesListColumns />
                <ul className="warehouse-list__list">
                    {warehouseData.map((warehouse) => (
                        <WarehousesListItem
                            key={warehouse.id}
                            warehouse={warehouse}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
}
