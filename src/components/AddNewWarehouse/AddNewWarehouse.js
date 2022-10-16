import "./AddNewWarehouse.scss";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import WarehouseInput from "../WarehouseInput/WarehouseInput";
import BlueButton from "../BlueButton/BlueButton";
import WhiteButton from "../WhiteButton/WhiteButton";
// import axios from "axios";

export default function AddNewWarehouse() {
    // const port = 8080;

    // axios.post(`http://localhost:${port}`, { var: "test" }).then().catch();

    return (
        <main className="anw">
            <div className="anw__pageheader">
                <img src={backIcon} alt="back arrow"></img>
                <h1 className="anw__title"> Add New Warehouse</h1>
            </div>
            <form className="anw__new-warehouse">
                <div className="anw__warehouse-details">
                    <h2 className="anw__subheader">Warehouse Details</h2>
                    <WarehouseInput variable="Warehouse Name" />
                    <WarehouseInput variable="Street Address" />
                    <WarehouseInput variable="City" />
                    <WarehouseInput variable="Country" />
                </div>
                <div className="anw__contact-details">
                    <h2 className="anw__subheader">Warehouse Details</h2>
                    <WarehouseInput variable="Contact Name" />
                    <WarehouseInput variable="Position" />
                    <WarehouseInput variable="Phone Number" />
                    <WarehouseInput variable="Email" />
                </div>
                <div className="anw__submit">
                    <WhiteButton buttonText="Cancel" type="reset" />
                    <BlueButton buttonText="Add Warehouse" type="submit" />
                </div>
            </form>
        </main>
    );
}
