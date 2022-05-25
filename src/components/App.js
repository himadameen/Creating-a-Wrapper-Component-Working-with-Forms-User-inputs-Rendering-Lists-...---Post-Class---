import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.realtives = [
      { name: "himad" },
      { name: "ameen" },
      { name: "subradhip" },
      { name: "nath" }
    ];
  }
  render() {
    return (
      <div id="main">
        <ol key={"relativesList"}>
          {this.realtives &&
            this.realtives.map((item, index) => (
              <li key={`relativesListItem${index + 1}`}>{item.name}</li>
            ))}
        </ol>
      </div>
    );
  }
}

export default App;
