import "./MainSubHeader.scss";
import { Link } from "react-router-dom";
import { BlueButton } from "../index";

export default function MainSubHeader({ title, buttonText }) {
    return (
        <div className="header__container">
            <h1 className="header__title">{title}</h1>
            <div>
                <input
                    className="header__search-bar"
                    type="text"
                    placeholder="Search..."
                ></input>
                <Link to="/warehouses/add">
                    <BlueButton buttonText={buttonText} type="button" />
                </Link>
            </div>
        </div>
    );
}
