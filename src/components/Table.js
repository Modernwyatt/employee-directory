import React from "react";
function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th onClick={props.handleSort}>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>DOB</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>
                  <img src={employee.image} alt="employee" />
                </td>
                <td>{employee.name}</td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.DOB}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
// need to add the rest of the headers}
