//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
//import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";

// function App() {
//   return (
//     <div className="App">
//       <p>This is test react</p>
//     </div>
//   );
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is React App using Class Component</p>
        <Greet Name="Dhanunjaya" Designation="SharePoint Developer" />
        <Greet Name="Chinna" Designation="Mechanic" />
        <Greet Name="Tirupathi" Designation="Farmer" />
        <Welcome />
        <Hello />
      </div>
    );
  }
}

export default App;
