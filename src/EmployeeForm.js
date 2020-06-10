import React, { Component } from "react";
import { Button } from "reactstrap";
import axios from "axios";

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmployee: {
        firstname: "",
        address: "",
        lastname: "",
        city: "",
        email: "",
        state: "",
        phone: "",
        zipcode: "",
      },

      stateOptions: [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming",
      ],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    axios
      .post("", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          First Name
          <input
            className="form-control"
            type="text"
            title="Full Name"
            name="firstname"
            onChange={this.handleChange}
            placeholder="i.e. Johnathon"
          />
        </div>
        <div className="form-group">
          Last Name
          <input
            className="form-control"
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="i.e. Doe"
          />
        </div>
        <div className="form-group">
          Street Address
          <input
            className="form-control"
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="i.e. 123 Forest Avenue"
          />
        </div>
        <div className="form-group">
          City
          <input
            className="form-control"
            type="text"
            name="city"
            onChange={this.handleChange}
            placeholder="i.e. Irvine"
          />
        </div>
        <div className="form-group">
          Email Address
          <input
            className="form-control"
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="i.e. johndoe@email.com"
          />
        </div>
        <div className="form-group">
          State
          <select
            className="form-control"
            name="state"
            onChange={this.handleChange}
            defaultValue={"default"}
          >
            {/* Display placeholder & all options */}
            <option value="default" disabled hidden>
              {"i.e. California"}
            </option>
            {this.state.stateOptions.map((option) => {
              return (
                <option key={option} value={option} label={option}>
                  {option}
                </option>
              );
            })}
          </select>
        </div>
        <div className="form-group">
          Phone Number
          <input
            className="form-control"
            type="text"
            name="phone"
            onChange={this.handleChange}
            placeholder="i.e. 123-456-7891"
          />
        </div>
        <div className="form-group">
          Zip Code
          <input
            className="form-control"
            type="text"
            name="zipcode"
            onChange={this.handleChange}
            placeholder="i.e. 95843"
          />
        </div>
        <Button color="primary" type="submit" active>
          Save
        </Button>
      </form>
    );
  }
}
