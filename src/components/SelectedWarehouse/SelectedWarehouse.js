import "./SelectedWarehouse.scss";
import { Component } from "react";
import axios from "axios";

import {
    DetailsSubHeader,
    SelectedWarehouseInventoryListColumns,
    WarehousesListItem,
} from "../index";

//temporary import of inventory data
const inventories = require("../../assets/TEMP_DATA/inventories.json");
let warehouses = [];

export default class SelectedWarehouse extends Component {
    state = {
        warehouse: {},
        inventory: [],
    };

    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses`)
            .then((response) => {
                warehouses = response.data;
                this.setState({
                    warehouse: response.data.find(
                        (warehouse) =>
                            warehouse.name ===
                            this.props.match.params.warehouseName
                    ),
                    inventory: inventories.filter(
                        (item) =>
                            item.warehouseName ===
                            this.props.match.params.warehouseName
                    ),
                });
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    render() {
        const { warehouse, inventory } = this.state;
        console.log(warehouse);
        console.log(inventory);

        return (
            <>
                <div className="warehouse-list">
                    <DetailsSubHeader
                        title={warehouse.name}
                        buttonText="Edit"
                    />
                    <div>Warehouse Info Here</div>
                    <SelectedWarehouseInventoryListColumns />
                    <ul className="warehouse-list__list">
                        {warehouses.map((warehouse) => (
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
}
