import "./BlueButton.scss";

export default function BlueButton({ buttonText, type, image }) {
    return (
        <button type={type} className="blue-button">
            <img
                src={image}
                // if no image tag is needed, this wll hide the image tag

                className={!image ? "blue-button__noimage" : null}
                alt="buttonpic"
            ></img>
            {buttonText}
        </button>
    );
}
