import "./BlueButton.scss";

export default function BlueButton({ buttonText, type }) {
    return (
        <>
            <button type={type} className="blue-button">
                {buttonText}
            </button>
        </>
    );
}
