import "./WhiteButton.scss";

export default function WhiteButton({ buttonText, type, buttonFunction }) {
    return (
        <>
            <button
                type={type}
                className="white-button"
                onClick={buttonFunction ? buttonFunction : null}
            >
                {buttonText}
            </button>
        </>
    );
}
