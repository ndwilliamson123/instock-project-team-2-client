import "./SelectedWarehouseInventoryListColumns.scss";
import sortSymbol from "../../assets/icons/sort-24px.svg";

export default function SelectedWarehouseInventoryListColumns() {
    return (
        <div className="selected-warehouse-inventory-list__columns">
            <div>
                <h3>INVENTORY ITEM</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>CATEGORY</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>STATUS</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>QTY</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>ACTIONS</h3>
            </div>
        </div>
    );
}
