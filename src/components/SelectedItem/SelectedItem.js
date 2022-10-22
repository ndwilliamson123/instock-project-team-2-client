import "./SelectedItem.scss";
import { Component } from "react";
import { DetailsSubHeader } from "../index";

//Temporary import of inventory data until backend is setup
import inventory from "../../assets/TEMP_DATA/inventories.json";

export default class SelectedItem extends Component {
    state = {
        item: {},
    };

    componentDidMount() {
        const currentItem = inventory.find((item) => {
            return item.id === this.props.match.params.itemID;
        });
        this.setState({
            item: currentItem,
        });
    }

    render() {
        const { item } = this.state;
        return (
            <div className="selected-item">
                <DetailsSubHeader
                    title={item?.itemName}
                    buttonText="Edit"
                    id={this.props.match.params.itemID}
                    warehouseOrInventory="inventory"
                />
                <div className="selected-item__info">
                    <div className="selected-item__description">
                        <h3>Item Description:</h3>
                        <p>{item.description}</p>
                    </div>
                    <div className="selected-item__category">
                        <h3>Category:</h3>
                        <p>{item.category}</p>
                    </div>
                    <div className="selected-item__status-quantity">
                        <div>
                            <h3>Status:</h3>
                            <p
                                className={
                                    item.status === "In Stock"
                                        ? "in-stock"
                                        : "out-of-stock"
                                }
                            >
                                {item.status}
                            </p>
                        </div>
                        <div>
                            <h3>Quantity:</h3>
                            <p>{item.quantity}</p>
                        </div>
                    </div>
                    <div className="selected-item__warehouse">
                        <h3>Warehouse:</h3>
                        <p>{item.warehouseName}</p>
                    </div>
                </div>
            </div>
        );
    }
}
