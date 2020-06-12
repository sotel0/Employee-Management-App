import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class EmployeeTable extends Component {
  render() {
    return (
      <div>
        <h3>Manage Employees</h3>
        <Button color="primary">Create New Employee</Button>
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
            </td>
          </tbody>
        </Table>
      </div>
    );
  }
}
