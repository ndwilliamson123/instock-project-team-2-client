import "./AddNewWarehouse.scss";
import React from "react";
import { Link } from "react-router-dom";
import {
    BlueButton,
    WhiteButton,
    WarehouseInput,
    AddEditSubheader,
} from "../../components/index";
import axios from "axios";

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
                contact: {
                    name: "",
                    position: "",
                    phone: "",
                    email: "",
                },
            },
            errors: {
                id: "",
                name: "",
                address: "",
                city: "",
                country: "",
                contact: {
                    name: "",
                    position: "",
                    phone: "",
                    email: "",
                },
            },
        };
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            const port = 8080;
            axios
                .post(`http://localhost:${port}/warehouses`, {
                    id: this.state.fields.id,
                    name: this.state.fields.name,
                    address: this.state.fields.address,
                    city: this.state.fields.city,
                    country: this.state.fields.country,
                    contact: {
                        name: this.state.fields.contact.name,
                        position: this.state.fields.contact.position,
                        phone: this.state.fields.contact.phone,
                        email: this.state.fields.contact.email,
                    },
                })
                .then(console.log("Form has been submitted"))
                .catch((e) => console.error(e));
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
                contact: {
                    name: "",
                    position: "",
                    phone: "",
                    email: "",
                },
            },
            errors: {},
        });
    };

    handleValidation() {
        let fields = this.state.fields;
        let errors = { contact: {} };
        let formIsValid = true;

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
        if (!fields.contact["name"]) {
            formIsValid = false;
            errors.contact["name"] = "This field is required";
        }
        if (!fields.contact["position"]) {
            formIsValid = false;
            errors.contact["position"] = "This field is required";
        }
        if (!fields.contact["phone"]) {
            formIsValid = false;
            errors.contact["phone"] = "This field is required";
        }
        if (!fields.contact["email"]) {
            formIsValid = false;
            errors.contact["email"] = "This field is required";
        }

        this.setState({ errors: errors });
        return formIsValid;
    }

    handleChange(field, e) {
        let fields = this.state.fields;
        fields[field] = e.target.value;
        this.setState({ fields });
    }

    handleChangeContact(field, e) {
        let fields = this.state.fields;
        fields.contact[field] = e.target.value;
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
                                fields={this.state.fields.contact["name"]}
                                handleChange={this.handleChangeContact.bind(
                                    this,
                                    "name"
                                )}
                                error={this.state.errors.contact["name"]}
                            />
                            <WarehouseInput
                                variable="Position"
                                fields={this.state.fields.contact["position"]}
                                handleChange={this.handleChangeContact.bind(
                                    this,
                                    "position"
                                )}
                                error={this.state.errors.contact["position"]}
                            />
                            <WarehouseInput
                                variable="Phone Number"
                                fields={this.state.fields.contact["phone"]}
                                handleChange={this.handleChangeContact.bind(
                                    this,
                                    "phone"
                                )}
                                error={this.state.errors.contact["phone"]}
                            />
                            <WarehouseInput
                                variable="Email"
                                fields={this.state.fields.contact["email"]}
                                handleChange={this.handleChangeContact.bind(
                                    this,
                                    "email"
                                )}
                                error={this.state.errors.contact["email"]}
                            />
                        </div>
                    </div>
                    <div className="anw__submit">
                        <Link to="/warehouses" className="anw__cancel-link">
                            <WhiteButton buttonText="Cancel" type="click" />
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
