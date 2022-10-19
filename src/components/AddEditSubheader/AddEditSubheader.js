import backIcon from "../../assets/icons/arrow_back-24px.svg";
import "./AddEditSubheader.scss";

export default function AddEditSubheader({ title, link }) {
    return (
        <div className="add-edit-header">
            {/* Hook up your link here */}
            {/* <Link> */}
            <img src={backIcon} alt="back arrow" />
            {/* </Link> */}
            <h1 className="add-edit-header__title">{title}</h1>
        </div>
    );
}
