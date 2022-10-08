import "./WarehouseListItem.scss";
import arrowSymbol from "../../assets/icons/chevron_right-24px.svg";
import deleteSymbol from "../../assets/icons/delete_outline-24px.svg";
import editSymbol from "../../assets/icons/edit-24px.svg";

export default function WarehouseListItem(props) {
  const {
    name,
    address,
    city,
    country,
    contactName,
    contactPhone,
    contactEmail,
  } = props;

  return (
    <li className="warehouse-list-item">
      <div className='warehouse-list-item__info'>
        <div>
          <div className="warehouse-list-item__name">
            <h3>WAREHOUSE</h3>
            <div>
              <p>{name}</p>
              <img src={arrowSymbol} alt="" />
            </div>
          </div>
          <div className="warehouse-list-item__address">
            <h3>ADDRESS</h3>
            <p>{`${address}, ${city}, ${country}`}</p>
          </div>
        </div>
        <div>
          <div className="warehouse-list-item__contact-name">
            <h3>CONTACT NAME</h3>
            <p>{contactName}</p>
          </div>
          <div className="warehouse-list-item__contact-info">
            <h3>CONTACT INFORMATION</h3>
            <p>{contactPhone}</p>
            <p>{contactEmail}</p>
          </div>
        </div>
      </div>
      <div className="warehouse-list-item__actions">
        <img src={deleteSymbol} alt="delete button" />
        <img src={editSymbol} alt="edit button" />
      </div>
    </li>
  );
}
