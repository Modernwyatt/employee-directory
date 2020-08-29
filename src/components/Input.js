import React from "react";
function Input(props) {
  return (
    <div>
      <input type = "text" placeholder = "Search" onChange ={(event)=>props.handleSearch(event)}/>
    </div>
  );
}
export default Input;


