import React, { Component } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import Welcome from "./Component/Welcome";

function App() {
  return (
    <div className="App">
      <h1>This is React Application</h1>
      <h1>This is React Application</h1>
      <h1>This is React Application</h1>
      <h1>This is React Application</h1>
      <Welcome />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>This is React Application</h1>
//         <h1>This is React Application</h1>
//         <h1>This is React Application</h1>
//         <h1>This is React Application</h1>
//         <Welocme />
//       </div>
//     );
//   }
// }
export default App;
