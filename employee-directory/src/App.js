import React, { Component } from 'react';
import employees from './employees.json';
import './App.css';
import EmployeeRow from './EmployeeRow/index.js';
import Footer from './Footer/index';

class App extends Component {

  state = { employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1), 
    ascending: true }

  handleChange = event => {
    let userInput = event.target.value;
      if(userInput === "") {
        this.setState({employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1)})
      } else {
        const characters = employees;

    const result = characters.filter(employee => employee.last_name.toLowerCase().match(userInput.toLowerCase()) !== null);
  
    this.setState({employees: result})} 
  }

  handleSort = (columnTitle) => {
    let sortArray;
    const toggle = !this.state.ascending;
    if(toggle) {
      sortArray = employees.sort((a, b) => (a[columnTitle].toLowerCase() > b[columnTitle].toLowerCase()) ? 1 : -1)
    } else {
      sortArray = employees.sort((a, b) => (b[columnTitle].toLowerCase() > a[columnTitle].toLowerCase()) ? 1 : -1)
    }
    this.setState( { employees: sortArray, ascending: toggle } );
  }

  render() {
    return (
      <div>
      <div className="main">
        <h1>M&M Company </h1>
        <div className="input">
        <input placeholder="Search by Last Name" type="search" onChange={e => this.handleChange(e)} name="lname" label="input field" />
        </div>
        <table>
         
          <tbody>
            {this.state.employees.map(employeeObject => {
              return (
                <EmployeeRow
                  key={employeeObject.id}
                  avatar={employeeObject.avatar}
                  first_name={employeeObject.first_name}
                  last_name={employeeObject.last_name}
                  email={employeeObject.email}
                  gender={employeeObject.gender}
                  title={employeeObject.title}

                />
              )
            })}
          </tbody>
        </table>
        </div>
        <Footer />  
      </div>
    );
  }
}

export default App;