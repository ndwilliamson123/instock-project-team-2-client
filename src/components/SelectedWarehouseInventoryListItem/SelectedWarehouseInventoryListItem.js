import "./SelectedWarehouseInventoryListItem.scss";
import { Link } from "react-router-dom";
import arrowSymbol from "../../assets/icons/chevron_right-24px.svg";
import deleteSymbol from "../../assets/icons/delete_outline-24px.svg";
import editSymbol from "../../assets/icons/edit-24px.svg";

export default function SelectedWarehouseInventoryListItem({ item }) {
    const { itemName, category, status, quantity } = item;

    return (
        <li className="selected-warehouse-inventory-list-item">
            <div className="selected-warehouse-inventory-list-item__name">
                <h3>INVENTORY ITEM</h3>
                <Link to={`/warehouses/${itemName}`}>
                    <div>
                        <p>{itemName}</p>
                        <img src={arrowSymbol} alt="" />
                    </div>
                </Link>
            </div>
            <div className="selected-warehouse-inventory-list-item__category">
                <h3>CATEGORY</h3>
                <p>{category}</p>
            </div>
            <div className="selected-warehouse-inventory-list-item__status">
                <h3>STATUS</h3>
                <p>{status}</p>
            </div>
            <div className="selected-warehouse-inventory-list-item__quantity">
                <h3>QTY</h3>
                <p>{quantity}</p>
            </div>
            <div className="selected-warehouse-inventory-list-item__actions">
                <Link to={`/inventory/${itemName}/delete`}>
                    <img src={deleteSymbol} alt="delete button" />
                </Link>
                <Link to={`/inventory/${itemName}/edit`}>
                    <img src={editSymbol} alt="edit button" />
                </Link>
            </div>
        </li>
    );
}
