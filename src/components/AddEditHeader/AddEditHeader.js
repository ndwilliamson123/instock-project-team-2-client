import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./AddEditHeader.scss";

export default function AddEditHeader({ title }) {
    return (
        <div className="add-edit-header">
            <img src={backIcon} alt="back arrow" />
            <h1 className="add-edit-header__title">{title}</h1>
        </div>
    );
}
