import "./SelectedWarehouse.scss";
import { Component } from "react";
import axios from "axios";
import { SelectedWarehouseInventoryListItem } from "../index";

import {
    DetailsSubHeader,
    SelectedWarehouseInventoryListColumns,
} from "../index";

//temporary import of inventory data, will remove once backend is set up
const inventories = require("../../assets/TEMP_DATA/inventories.json");
export default class SelectedWarehouse extends Component {
    state = {
        warehouse: {},
        inventory: [],
    };

    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses`)
            .then((response) => {
                this.setState({
                    warehouse: response.data.find(
                        (warehouse) =>
                            warehouse.name ===
                            this.props.match.params.warehouseName
                    ),
                    //Will need to replace this with a second axios call once backend is set up
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
        const { contact } = this.state.warehouse;

        return (
            <div className="warehouse-list">
                <DetailsSubHeader title={warehouse.name} buttonText="Edit" />
                <div>
                    <div>
                        <h3>WAREHOUSE ADDRESS:</h3>
                        <p>{`${warehouse.address}, ${warehouse.city}, ${warehouse.country}`}</p>
                    </div>
                    <div>
                        <div>
                            <h3>CONTACT NAME:</h3>
                            <p>{contact?.name}</p>
                            <p>{contact?.position}</p>
                        </div>
                        <div>
                            <h3>CONTACT INFORMATION</h3>
                            <p>{contact?.phone}</p>
                            <p>{contact?.email}</p>
                        </div>
                    </div>
                </div>
                <SelectedWarehouseInventoryListColumns />
                <ul className="warehouse-list__list">
                    {inventory.map((item) => (
                        <SelectedWarehouseInventoryListItem
                            key={item.id}
                            item={item}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}
