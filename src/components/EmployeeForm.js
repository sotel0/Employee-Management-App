import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

export default class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newEmployee: {
        first_name: "",
        address: "",
        last_name: "",
        city: "",
        email: "",
        state: "",
        phone: "",
        zip_code: "",
        status : true,
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

    this.setState(prevState => {
      let newEmployee = Object.assign({}, prevState.newEmployee);
      newEmployee[name] = value;
      return { newEmployee };
    })
  }

  
  handleSubmit(event) {
    event.preventDefault();

    //TODO FORM VALIDATION
    //TODO don't unmount component if there's no api connection, or display error message
    //TODO check for duplicates
    axios
      .post("http://localhost:9999/employee", this.state.newEmployee)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      this.props.action(1);
  }

  render() {
    return (
      <div>
        <Row>
          <Col>
            <h5 className="float-left m-3">Enter Employee Detail</h5>
            <Button
              className="float-right m-3"
              onClick={() => this.props.action(1)}
              color="link"
            >
              Cancel
            </Button>
          </Col>
        </Row>

        <Form center="true" onSubmit={this.handleSubmit}>
          <Row form>
            <Col className="m-3">
              <FormGroup>
                <Label> First Name </Label>
                <Input
                  type="text"
                  name="first_name"
                  onChange={this.handleChange}
                  placeholder="i.e. Johnathon"
                />
              </FormGroup>
            </Col>
            <Col className="m-3">
              <FormGroup>
                <Label>Street Address</Label>
                <Input
                  bsSize="medium"
                  type="text"
                  name="address"
                  onChange={this.handleChange}
                  placeholder="i.e. 123 Forest Avenue"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col className="m-3">
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="last_name"
                  onChange={this.handleChange}
                  placeholder="i.e. Doe"
                />
              </FormGroup>
            </Col>
            <Col className="m-3">
              <FormGroup>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  onChange={this.handleChange}
                  placeholder="i.e. Irvine"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col className="m-3">
              <FormGroup>
                <Label>Email Address</Label>
                <Input
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                  placeholder="i.e. johndoe@email.com"
                />
              </FormGroup>
            </Col>
            <Col className="m-3">
              <FormGroup>
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
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col className="m-3">
              <FormGroup>
                <Label>Phone Number</Label>
                <Input
                  type="text"
                  name="phone"
                  onChange={this.handleChange}
                  placeholder="i.e. 123-456-7891"
                />
              </FormGroup>
              <Button
                color="primary"
                type="submit"
              >
                Save
              </Button>
            </Col>

            <Col className="m-3">
              <FormGroup>
                <Label>Zipcode</Label>
                <Input
                  type="text"
                  name="zip_code"
                  onChange={this.handleChange}
                  placeholder="i.e. 95843"
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}
