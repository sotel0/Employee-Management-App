import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

export default class EmployeeTable extends Component {
  componentDidMount() {}

  componentDidUpdate() {
    //
  }

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
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>@mdo</td>
              <td>
                <Button outline color="danger">
                  X
                </Button>
                <Button outline color="primary">
                  +
                </Button>
              </td>
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
