import React, { Component } from "react";
import employees from "../data/employees.json";
import Table from "./Table";
import Input from "./Input";


class Main extends Component {
  state = {
    order: "ascending",
    filteredEmployees: employees,
  }
  handleSort = ()=>{
     if (this.state.order=== "ascending"){
       var decentEmployee= this.state.filteredEmployees.sort(
        (a,b)=>a.name < b.name ? 1 : -1);
        this.setState({
          filteredEmployees: decentEmployee, order: "descending"
        });
     } else {
      var ascendEmployee= this.state.filteredEmployees.sort(
        (a,b)=>a.name > b.name ? 1 : -1);
        this.setState({
          filteredEmployees: ascendEmployee, order: "ascending"
        });
     }
  }
  handleSearch = (e)=>{
    console.log("test")
    var searchInput = (e.target.value).toLowerCase();

    var filteredEmployees = employees.filter(employee => {
      var name = employee.name.toLowerCase();
      return name.indexOf(searchInput) !== -1;
    })
    this.setState({filteredEmployees:filteredEmployees})

  }
  render(){
      console.log(this.state)
      return(
          <div>
           <Input handleSearch ={this.handleSearch}/>
          <Table employees ={this.state.filteredEmployees} handleSort = {this.handleSort}/>
         
          </div> 
      )
  }
}
export default Main;