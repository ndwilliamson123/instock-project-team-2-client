import React from "react";
import "./WarehouseInput.scss";
import errorImg from "../../assets/icons/error-24px.svg";

export default class WarehouseInput extends React.Component {
    render() {
        let { variable, fields, handleChange, error } = this.props;
        return (
            <>
                <div className="warehouse-input">
                    <h3 className="warehouse-input__title">{variable}</h3>
                    <input
                        name={variable}
                        type="text"
                        placeholder={variable}
                        onChange={handleChange}
                        value={fields}
                        className={
                            error
                                ? "warehouse-input__input--error"
                                : "warehouse-input__input"
                        }
                    />
                    <div className="warehouse-input__error">
                        <img
                            className={
                                error
                                    ? "warehouse-input__error-image"
                                    : "warehouse-input__nodisplay"
                            }
                            src={errorImg}
                            alt="error"
                        />
                        <span
                            className={
                                error
                                    ? "warehouse-input__error-font"
                                    : "warehouse-input__nodisplay"
                            }
                        >
                            {error}
                        </span>
                    </div>
                </div>
            </>
        );
    }
}
