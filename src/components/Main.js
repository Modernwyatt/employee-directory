import React, { Component } from "react";
import employees from "../data/employees.json";
import Table from "./Table";
import Input from "./Input";


class Main extends Component {
  state = {
    order: "accending",
    filteredEmployees: employees,
  }
  // sort function (sort)
  // search function (filter)
  render(){
      console.log(this.state)
      return(
          <div>
          <Input/>
          <Table employees ={this.state.filteredEmployees}/>
          </div> 
      )
  }
}
export default Main;
 // <Input handlesSearch ={this.handleSearch}/>}
 // <Table employees ={this.state.filteredEmployees} handleSort = {this.handleSort}/>}