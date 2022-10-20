import "./WhiteButton.scss";

export default function WhiteButton({ buttonText, type, image }) {
    return (
        <button type={type} className="white-button">
            <img
                src={image}
                // if no image tag is needed, this wll hide the image tag

                className={!image ? "white-button__noimage" : null}
                alt="buttonpic"
            ></img>
            {buttonText}
        </button>
    );
}
