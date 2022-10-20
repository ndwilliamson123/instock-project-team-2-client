import "./AddNewWarehouse.scss";
import React from "react";
import { Link } from "react-router-dom";
import {
    BlueButton,
    WhiteButton,
    WarehouseInput,
    AddEditSubheader,
} from "../../components/index";
// import axios from "axios";

export default class AddNewWarehouse extends React.Component {
    constructor() {
        super();
        this.state = {
            fields: {
                id: "",
                name: "",
                address: "",
                city: "",
                country: "",
                contactname: "",
                position: "",
                phone: "",
                email: "",
            },
            errors: {},
        };
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            console.log("Form submitted");
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
                id: "",
                name: "",
                address: "",
                city: "",
                country: "",
                contactname: "",
                position: "",
                phone: "",
                email: "",
                errors: {},
            },
        });
    };

    handleValidation() {
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if (!fields["name"]) {
            formIsValid = false;
            errors["name"] = "This field is required";
        }
        if (!fields["address"]) {
            formIsValid = false;
            errors["address"] = "This field is required";
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
                <AddEditSubheader
                    title={"Add New Warehouse"}
                    link={"/warehouses"}
                />
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
                                fields={this.state.fields["name"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "name"
                                )}
                                error={this.state.errors["name"]}
                            />
                            <WarehouseInput
                                variable="Street Address"
                                fields={this.state.fields["address"]}
                                handleChange={this.handleChange.bind(
                                    this,
                                    "address"
                                )}
                                error={this.state.errors["address"]}
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
                        <Link to="/warehouses" className="anw__cancel-link">
                            <WhiteButton
                                buttonText="Cancel"
                                type="click"
                                buttonFunction={this.resetFields}
                            />
                        </Link>
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
