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

    this.cancelForm = this.cancelForm.bind(this);
    this.createForm = this.createForm.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  swapFormDisplay() {
    if (this.state.showEmployeeForm) {
      this.setState({ showEmployeeForm: false });
    } else {
      this.setState({ showEmployeeForm: true });
    }
  }

  swapTableDisplay() {
    if (this.state.showTable) {
      this.setState({ showTable: false });
    } else {
      this.setState({ showTable: true });
    }
  }

  cancelForm(event) {
    this.swapFormDisplay();
    this.swapTableDisplay();
  }

  saveForm(event) {
    this.swapTableDisplay();
    //AJAX POST REQUEST
  }

  createForm(event) {
    this.swapFormDisplay();
    this.swapTableDisplay();
  }

  render() {
    return (
      <div>
        {this.state.showEmployeeForm && (
          <EmployeeForm action={(this.cancelForm, this.saveForm)} />
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
