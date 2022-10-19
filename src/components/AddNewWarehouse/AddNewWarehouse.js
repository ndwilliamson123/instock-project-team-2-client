import "./AddNewWarehouse.scss";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import React from "react";
import {
    BlueButton,
    WhiteButton,
    WarehouseInput,
} from "../../components/index";
// import axios from "axios";

export default class AddNewWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {
                wname: "",
                streetaddress: "",
                city: "",
                country: "",
                contactname: "",
                position: "",
                phonenumber: "",
                email: "",
            },
            errors: {},
        };
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            // add API
            // alert("Form submitted");
            // const port = 8080;
            // axios.post(`http://localhost:${port}`, { var: "test" }).then().catch();
        } else {
            console.log("Form has errors.");
        }
    }

    resetFields = () => {
        this.setState({
            fields: {
                wname: "",
                streetaddress: "",
                city: "",
                country: "",
                contactname: "",
                position: "",
                phonenumber: "",
                email: "",
            },
            errors: {},
        });
    };

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["wname"]) {
            formIsValid = false;
            errors["wname"] = "This field is required";
        }
        if (!fields["streetaddress"]) {
            formIsValid = false;
            errors["streetaddress"] = "This field is required";
        }
        if (!fields["city"]) {
            formIsValid = false;
            errors["city"] = "This field is required";
        }
        if (!fields["country"]) {
            formIsValid = false;
            errors["country"] = "This field is required";
        }
        if (!fields["contactname"]) {
            formIsValid = false;
            errors["contactname"] = "This field is required";
        }
        if (!fields["position"]) {
            formIsValid = false;
            errors["position"] = "This field is required";
        }
        if (!fields["phonenumber"]) {
            formIsValid = false;
            errors["phonenumber"] = "This field is required";
        }
        if (!fields["email"]) {
            formIsValid = false;
            errors["email"] = "This field is required";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    render() {
        return (
            <main className="anw">
                <div className="anw__pageheader">
                    <img src={backIcon} alt="back arrow"></img>
                    <h1 className="anw__title"> Add New Warehouse</h1>
                </div>
                <form
                    className="anw__new-warehouse"
                    onSubmit={this.contactSubmit.bind(this)}
                >
                    <div className="anw__new-warehouse-container">
                        <div className="anw__warehouse-details">
                            <h2 className="anw__subheader">
                                Warehouse Details
                            </h2>
                            <WarehouseInput
                                variable="Warehouse Name"
                                fields={this.state.fields["wname"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "wname"
                                )}
                                error={this.state.errors["wname"]}
                            />
                            <WarehouseInput
                                variable="Street Address"
                                fields={this.state.fields["streetaddress"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "streetaddress"
                                )}
                                error={this.state.errors["streetaddress"]}
                            />
                            <WarehouseInput
                                variable="City"
                                fields={this.state.fields["city"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "city"
                                )}
                                error={this.state.errors["city"]}
                            />
                            <WarehouseInput
                                variable="Country"
                                fields={this.state.fields["country"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "country"
                                )}
                                error={this.state.errors["country"]}
                            />
                        </div>
                        <div className="anw__contact-details">
                            <h2 className="anw__subheader">Contact Details</h2>
                            <WarehouseInput
                                variable="Contact Name"
                                fields={this.state.fields["contactname"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "contactname"
                                )}
                                error={this.state.errors["contactname"]}
                            />
                            <WarehouseInput
                                variable="Position"
                                fields={this.state.fields["position"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "position"
                                )}
                                error={this.state.errors["position"]}
                            />
                            <WarehouseInput
                                variable="Phone Number"
                                fields={this.state.fields["phonenumber"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "phonenumber"
                                )}
                                error={this.state.errors["phonenumber"]}
                            />
                            <WarehouseInput
                                variable="Email"
                                fields={this.state.fields["email"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "email"
                                )}
                                error={this.state.errors["email"]}
                            />
                        </div>
                    </div>
                    <div className="anw__submit">
                        <WhiteButton
                            buttonText="Cancel"
                            type="click"
                            buttonFunction={this.resetFields}
                        />
                        <BlueButton
                            buttonText="+ Add Warehouse"
                            type="submit"
                        />
                    </div>
                </form>
            </main>
        );
    }
}
