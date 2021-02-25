import React,  {Component, components} from 'react';
import employees from './employees.json';
import './App.css';
import EmployeeRow from './components/EmployeeRow/index.js';
import Footer from './components/Footer/index.js';

class App extends Component {

  state = { employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1), 
    ascending: true }

  //This function allows users to filter by last name//
  handleChange = event => {
    let userInput = event.target.value;
      if(userInput === "") {
        this.setState({employees: employees.sort((a, b) => (a.last_name.toLowerCase() > b.last_name.toLowerCase()) ? 1 : -1)})
      } else {
        const characters = employees;

    const result = characters.filter(employee => employee.last_name.toLowerCase().match(userInput.toLowerCase()) !== null);
  
    this.setState({employees: result})} 
  }

  //This function allows users to sort on multiple column titles.//
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

  
}


export default App;
