import "./SelectedWarehouse.scss";
import { Component } from "react";
import axios from "axios";
import {
    SelectedWarehouseInventoryListItem,
    DetailsSubHeader,
    SelectedWarehouseInventoryListColumns,
} from "../index";

export default class SelectedWarehouse extends Component {
    state = {
        warehouse: {},
        inventory: [],
    };

    componentDidMount() {
        axios
            .get(
                `http://localhost:8080/warehouses/${this.props.match.params.warehouseID}`
            )
            .then((response) => {
                //API returns an array, 0 index is the selected warehouse, 1 index is an array of the inventory items at selected warehouse
                this.setState({
                    warehouse: response.data[0],
                    inventory: response.data[1],
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
            <div className="selected-warehouse-inventory-list">
                <DetailsSubHeader
                    title={warehouse?.name}
                    buttonText="Edit"
                    id={this.state.warehouse.id}
                    warehouseOrInventory="warehouses"
                />
                <div className="selected-warehouse-inventory-list__info">
                    <div className="selected-warehouse-inventory-list__info-address">
                        <h3>WAREHOUSE ADDRESS:</h3>
                        <p>{`${warehouse?.address}, ${warehouse?.city}, ${warehouse?.country}`}</p>
                    </div>
                    <div className="selected-warehouse-inventory-list__info-contact">
                        <div>
                            <h3>CONTACT NAME:</h3>
                            <p>{contact?.name}</p>
                            <p>{contact?.position}</p>
                        </div>
                        <div>
                            <h3>CONTACT INFORMATION:</h3>
                            <p>{contact?.phone}</p>
                            <p>{contact?.email}</p>
                        </div>
                    </div>
                </div>
                <SelectedWarehouseInventoryListColumns />
                <ul className="selected-warehouse-inventory-list__list">
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
