import "./BlueButton.scss";

export default function BlueButton({ buttonText, type, image }) {
    return (
        <>
            <button type={type} className="blue-button">
                <img
                    src={image}
                    alt="buttonpic"
                    className={
                        image ? "blue-button__image" : "blue-button__noimage"
                    }
                ></img>
                {buttonText}
            </button>
        </>
    );
}
