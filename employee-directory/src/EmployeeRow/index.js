import React from 'react';
import './style.css';

function EmployeeRow(props) {
    return (
        <tr key={props.id}>
        <td id="employeeImage"><image src={props.avatar} alt={props.id}/></td>
        <td>{props.first_name}</td>
        <td>{props.first_name}</td>
        <td>{props.title}</td>
        <td>{props.email}</td>
        <td>{props.gender}</td>
      </tr>
    )
}

export default EmployeeRow;