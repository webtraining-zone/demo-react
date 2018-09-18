import React, {Component} from "react";
import "./App.css";
import Talks from "./components/Talks";

class App extends Component {
  render() {
    return (
        <div className="App">

          <Talks></Talks>

        </div>
    );
  }
}

export default App;
