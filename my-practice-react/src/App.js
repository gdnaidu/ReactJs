//import React from "react";
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
//import { Greet } from "./Components/Greet";
import Welcome from "./Components/Welcome";

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
        <Greet />
        <Welcome />
      </div>
    );
  }
}

export default App;
