import "./RedButton.scss";

export default function RedButton({ buttonText, type, image }) {
    return (
        <button type={type} className="red-button">
            <img
                src={image}
                // if no image tag is needed, this wll hide the image tag

                className={!image ? "red-button__noimage" : null}
                alt="buttonpic"
            ></img>
            {buttonText}
        </button>
    );
}
