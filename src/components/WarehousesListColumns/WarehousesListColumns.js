import "./WarehousesListColumns.scss";
import sortSymbol from "../../assets/icons/sort-24px.svg";

export default function WarehousesListColumns() {
    return (
        <div className="warehouse-list__columns">
            <div>
                <h3>WAREHOUSE</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>ADDRESS</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>CONTACT NAME</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>CONTACT INFORMATION</h3>
                <img src={sortSymbol} alt="" />
            </div>
            <div>
                <h3>ACTIONS</h3>
            </div>
        </div>
    );
}
