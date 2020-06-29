import React from "react";

// function Greet() {
//   return <h1>Hello Dhanunjaya</h1>;
// } // Function method

const Greet = (props) => {
  return (
    <h1>
      Hello {props.Name} a.k.a {props.Designation}
    </h1>
  );
}; //Arrow method

export default Greet;
