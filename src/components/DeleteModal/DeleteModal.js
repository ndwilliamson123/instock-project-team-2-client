import RedButton from "../Buttons/RedButton/RedButton.js";
import WhiteButton from "../Buttons/WhiteButton/WhiteButton.js";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";
import IconButton from "../Buttons/IconButton/IconButton.js";

function DeleteModal({ onClose, onDelete, modalName }) {
  return (
    <div className="modal">
      <div className="modal__popup-content">
        <div>
          <div className="modal__close-icon">
            <IconButton image={closeIcon} alt="close-icon" onClick={onClose} />
          </div>
          <h2 className="modal__title">Delete {modalName} warehouse?</h2>
          <p className="modal__text">
            Please confirm that you'd like to delete {modalName} from the list
            of warehouses. You won't be able to undo this action.
          </p>
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
