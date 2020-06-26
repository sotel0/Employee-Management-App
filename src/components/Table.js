import React, { Component } from "react";
import { Table, Button } from "reactstrap";
import axios from "axios";

export default class EmployeeTable extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      employees : []
    };

    this.handleActivate = this.handleActivate.bind(this);
    this.handleDeactivate = this.handleDeactivate.bind(this);
  } 


  componentDidMount() {
    axios
    .get("http://localhost:9999/employee")
    .then((response) => {
      console.log(response);
      const employees = response.data;
      this.setState({employees});
    })
    .catch((error) => {
      console.log(error);
    });
  }

  handleActivate(id){
    axios
    .patch(`http://localhost:9999/employee/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    //update employee state
     this.setState(prevState => {
    prevState.employees[id-1].status = 1;
    return{prevState};
     });
  }

  handleDeactivate(id){
    axios
    .delete(`http://localhost:9999/employee/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

    this.setState(prevState => {
      prevState.employees[id-1].status = 0;
      return{prevState};
       });
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
              {this.state.employees.map(employee => 
                <tr key={employee.user_id}>
                  <td>
                    {employee.first_name} {employee.last_name}
                  </td>
                  <td>
                    {employee.email}
                  </td>
                  <td>
                    {employee.phone}
                  </td>
                  <td>
                    {employee.address}
                  </td>
                  <td>
                    {employee.status === 1 
                    ? "Active" 
                    : "Inactive"}
                  </td>
                  <td>
                  {employee.status === 1 
                    ? <Button type="button" outline color="danger" onClick={(event) => this.handleDeactivate(employee.user_id,event)}>
                        X
                      </Button>
                    : <Button type="button" outline color="primary" onClick={(event) => this.handleActivate(employee.user_id,event)} >
                       +
                      </Button>
                  }
                </td>
                </tr>
                )}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}
