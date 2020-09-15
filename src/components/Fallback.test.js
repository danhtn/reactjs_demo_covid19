import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Fallback from "./Fallback";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Renders with or without a name", () => {
  act(() => {
    render(<Fallback />, container);
  });

  expect(container.querySelector("h1").textContent).toContain("Error - 404");
  expect(container.querySelector("h5").textContent).toContain("The page you are looking for is not available");
});