import React from "react";
import ReactDOM from "react-dom";
import App from ".";

describe("App test", () => {
  it("should run without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
  });
});
