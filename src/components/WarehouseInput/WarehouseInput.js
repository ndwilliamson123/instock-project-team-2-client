import "./WarehouseInput.scss";

export default function WarehouseInput({ variable }) {
    return (
        <>
            <div className="warehouse-input">
                <h3 className="warehouse-input__title">{variable}</h3>
                <input
                    name={variable}
                    type="text"
                    placeholder={variable}
                    className="warehouse-input__input"
                    required
                />
                <div className="warehouse-input__error"></div>
            </div>
        </>
    );
}
