import "./WarehousesList.scss";
import { Component } from "react";
import {
  MainSubHeader,
  WarehousesListColumns,
  WarehousesListItem,
  DeleteModal,
} from "../index";
import axios from "axios";

export default class WareHousesList extends Component {
  state = {
    warehouses: [],
    modalId: "",
    modalName: "",
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

  deleteWarehouseApiCall() {
    axios
      .delete(`http://localhost:8080/warehouses/${this.state.modalId}`)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
  }

  render() {
    const { warehouses, modalId } = this.state;

    return (
      <div className="warehouse-list">
        <MainSubHeader title="Warehouses" buttonText={"+ Add New Warehouse"} />
        <WarehousesListColumns />
        <ul className="warehouse-list__list">
          {warehouses.map((warehouse) => (
            <WarehousesListItem
              key={warehouse.id}
              warehouse={warehouse}
              deleteWarehouse={() =>
                this.setState({
                  modalId: warehouse.id,
                  modalName: warehouse.name,
                })
              }
            />
          ))}
        </ul>
        {modalId !== "" ? (
          <DeleteModal
            modalName={this.state.modalName}
            onClose={() =>
              this.setState({
                modalId: "",
              })
            }
            onDelete={() => this.deleteWarehouseApiCall()}
          />
        ) : null}
      </div>
    );
  }
}
