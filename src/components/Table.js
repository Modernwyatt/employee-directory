import React from "react";
function Table(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>image</th>
            <th onClick={props.handleSort}>Name</th>
          </tr>
        </thead>
        <tbody>
          {props.employees.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>
                  <img src={employee.image} alt="employee" />
                </td>
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
