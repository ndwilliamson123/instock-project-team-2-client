import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./AddEditSubheader.scss";
import { Link } from "react-router-dom";

export default function AddEditSubheader({ title, link }) {
    return (
        <div className="add-edit-header">
            <Link to={link} className="add-edit-header__link">
                <img src={backIcon} alt="back arrow" />
            </Link>
            <h1 className="add-edit-header__title">{title}</h1>
        </div>
    );
}
