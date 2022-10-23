import RedButton from "../Buttons/RedButton/RedButton.js";
import WhiteButton from "../Buttons/WhiteButton/WhiteButton.js";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";
import IconButton from "../Buttons/IconButton/IconButton.js";

function DeleteModal({ onClose, onDelete, modalText, modalTitle }) {
  return (
    <div className="modal">
      <div className="modal__popup-content">
        <div>
          <div className="modal__close-icon">
            <IconButton image={closeIcon} alt="close-icon" onClick={onClose} />
          </div>
          <h2 className="modal__title"> {modalTitle}</h2>
          <p className="modal__text">{modalText}</p>
        </div>
        <div className="modal__button-wrapper">
          <WhiteButton buttonText="Cancel" onClick={onClose} />
          <RedButton buttonText="Delete" onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}
export default DeleteModal;

