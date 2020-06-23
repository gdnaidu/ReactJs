import React from "react";

// function Greet() {
//   return <h1>Hello Dhanunjaya</h1>;
// } // Function method

const Greet = (Props) => {
  return (
    <h1>
      Hello {Props.Name} a.k.a {Props.Designation}
    </h1>
  );
}; //Arrow method

export default Greet;
