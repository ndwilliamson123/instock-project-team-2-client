import "./DetailsSubHeader.scss";
import { Link } from "react-router-dom";
import backSymbol from "../../assets/icons/arrow_back-24px.svg";
import editSymbol from "../../assets/icons/edit-24px-white.svg";

export default function DetailsSubHeader({ title, buttonText }) {
    return (
        <div className="details-header__container">
            <div>
                <Link to="/warehouses">
                    <img src={backSymbol} alt="back button" />
                </Link>
                <h1 className="details-header__title">{title}</h1>
            </div>
            <Link to={`/warehouses/${title}/edit`}>
                <button type="button" className="blue-button">
                    <img src={editSymbol} alt="buttonpic" />
                    <span>{buttonText}</span>
                </button>
            </Link>
        </div>
    );
}
