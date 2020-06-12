import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

export default class EmployeeTable extends Component {
  componentDidMount() {
    //TODO AJAX GET request for table data
  }

  //TODO AJAX PATCH : on + button click

  //TODO AJAX DELETE : on - button click

  render() {
    return (
      <div>
        <div>
          <h3 className="float-left m-3">Manage Employees</h3>
          <Button
            className="float-right m-3"
            onClick={() => this.props.action(1)}
            color="primary"
          >
            Create New Employee
          </Button>
        </div>
        <div>
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Address</th>
                <th>Status</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
              <td>Mark Wahlberg</td>
              <td>mwall@hotmail.com</td>
              <td>523-423-1453</td>
              <td>Walmart Parking Lot</td>
              <td>Active</td>
              <td>
                {/* render button dynamically from status*/}
                <Button outline color="danger">
                  X
                </Button>
              </td>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
