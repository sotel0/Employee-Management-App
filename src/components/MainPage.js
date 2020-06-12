import React, { Component } from "react";
import EmployeeForm from "./EmployeeForm.js";
import Table from "./Table";
import { connect } from "react-redux";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTable: true,
      showEmployeeForm: false,
    };

    this.closeForm = this.closeForm.bind(this);
    this.createForm = this.createForm.bind(this);
    this.swapComponentDisplay = this.swapComponentDisplay.bind(this);
  }

  swapComponentDisplay(shownComponent) {
    if (this.state[shownComponent]) {
      this.setState({ [shownComponent]: false });
    } else {
      this.setState({ [shownComponent]: true });
    }
  }

  closeForm(event) {
    this.swapComponentDisplay("showEmployeeForm");
    this.swapComponentDisplay("showTable");
  }

  createForm(event) {
    this.swapComponentDisplay("showEmployeeForm");
    this.swapComponentDisplay("showTable");
  }

  render() {
    return (
      <div>
        {this.state.showEmployeeForm && (
          <EmployeeForm action={this.closeForm} />
        )}
        {this.state.showTable && <Table action={this.createForm} />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showTable: state.showTable,
  };
};

export default connect(mapStateToProps)(MainPage);
