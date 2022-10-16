import "./WhiteButton.scss";

export default function WhiteButton({ buttonText, type }) {
    return (
        <>
            <button type={type} className="white-button">
                {buttonText}
            </button>
        </>
    );
}
