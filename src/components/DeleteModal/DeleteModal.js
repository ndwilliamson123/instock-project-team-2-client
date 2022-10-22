import RedButton from "../Buttons/RedButton/RedButton.js";
import WhiteButton from "../Buttons/WhiteButton/WhiteButton.js";
import closeIcon from "../../assets/icons/close-24px.svg";
import "./DeleteModal.scss";
import IconButton from "../Buttons/IconButton/IconButton.js";

function DeleteModal({ onClose, onDelete }) {
  return (
    <div className="modal">
      <div className="modal__popup-content">
        <div className="modal__close-icon">
          <IconButton
            image={closeIcon}
            alt="close-icon"
            onClick={onClose}
            className="modal__close-icon"
          />
        </div>
        <h2>Delete .... warehouse?</h2>
        <p>
          Please confirm that you'd like to delete ... from the list of
          warehouses. You won't be able to undo this action.
        </p>
        <WhiteButton buttonText="Cancel" onClick={onClose} />
        <RedButton buttonText="Delete" onClick={onDelete} />
      </div>
    </div>
  );
}
export default DeleteModal;
