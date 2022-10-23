import "./WarehousesList.scss";
import { Component } from "react";
import { Route } from "react-router-dom";
import {
    DeleteWarehouse,
    MainSubHeader,
    WarehousesListColumns,
    WarehousesListItem,
} from "../index";
import axios from "axios";

export default class WareHousesList extends Component {
    state = {
        warehouses: [],
    };

    componentDidMount() {
        axios
            .get(`http://localhost:8080/warehouses`)
            .then((response) => {
                this.setState({
                    warehouses: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
                alert(error);
            });
    }

    render() {
        const { warehouses } = this.state;
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
