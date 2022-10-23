import "./WarehousesListItem.scss";
import { Link } from "react-router-dom";
import arrowSymbol from "../../assets/icons/chevron_right-24px.svg";
import deleteSymbol from "../../assets/icons/delete_outline-24px.svg";
import editSymbol from "../../assets/icons/edit-24px.svg";
import IconButton from "../Buttons/IconButton/IconButton.js";

export default function WarehouseListItem({ warehouse }) {
    const { name, address, city, country, id } = warehouse;
    const {
        name: contactName,
        phone: contactPhone,
        email: contactEmail,
    } = warehouse.contact;

    return (
        <li className="warehouse-list-item">
            <div className="warehouse-list-item__name">
                <h3>WAREHOUSE</h3>
                <Link to={`/warehouses/${id}`}>
                    <div>
                        <p>{name}</p>
                        <img src={arrowSymbol} alt="" />
                    </div>
                </Link>
            </div>
            <div className="warehouse-list-item__address">
                <h3>ADDRESS</h3>
                <p>{`${address}, ${city}, ${country}`}</p>
            </div>
            <div className="warehouse-list-item__contact-name">
                <h3>CONTACT NAME</h3>
                <p>{contactName}</p>
            </div>
            <div className="warehouse-list-item__contact-info">
                <h3>CONTACT INFORMATION</h3>
                <p>{contactPhone}</p>
                <p>{contactEmail}</p>
            </div>
            <div className="warehouse-list-item__actions">
                <Link to={`/warehouses/${name}/${id}/delete`}>
                    <img src={deleteSymbol} alt="delete button" />
                </Link>
                <Link to={`/warehouses/${name}/edit`}>
                    <img src={editSymbol} alt="edit button" />
                </Link>
            </div>
        </li>
    );
}
