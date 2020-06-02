import React from "react";
import { Table } from "reactstrap";
function App() {
  return (
    <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          <td>1</td>
          <td>Bob</td>
          <td>23</td>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
