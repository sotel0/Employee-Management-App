import React, { Component } from "react";
import { Button } from "reactstrap";

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

  handleSubmit(event) {}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div class="form-group">
          First Name
          <input
            class="form-control"
            type="text"
            title="Full Name"
            name="firstname"
            onChange={this.handleChange}
            placeholder="i.e. Johnathon"
          />
        </div>
        <div class="form-group">
          Last Name
          <input
            class="form-control"
            type="text"
            name="lastname"
            onChange={this.handleChange}
            placeholder="i.e. Doe"
          />
        </div>
        <div class="form-group">
          Street Address
          <input
            class="form-control"
            type="text"
            name="address"
            onChange={this.handleChange}
            placeholder="i.e. 123 Forest Avenue"
          />
        </div>
        <div class="form-group">
          City
          <input
            class="form-control"
            type="text"
            name="city"
            onChange={this.handleChange}
            placeholder="i.e. Irvine"
          />
        </div>
        <div class="form-group">
          Email Address
          <input
            class="form-control"
            type="text"
            name="email"
            onChange={this.handleChange}
            placeholder="i.e. johndoe@email.com"
          />
        </div>
        <div class="form-group">
          State
          <select class="form-control" name="state">
            {/* Display placeholder & all options */}
            <option value="i.e. California" disabled selected>
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
        <div class="form-group">
          Phone Number
          <input
            class="form-control"
            type="text"
            name="phone"
            onChange={this.handleChange}
            placeholder="i.e. 123-456-7891"
          />
        </div>
        <div class="form-group">
          Zip Code
          <input
            class="form-control"
            type="text"
            name="zipcode"
            onChange={this.handleChange}
            placeholder="i.e. 95843"
          />
        </div>
        <Button color="primary" active>
          Save
        </Button>
      </form>
    );
  }
}
