import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test, describe } from "@jest/globals";
import Page from "@/app/(pages)/(website)/(home)/page"
import * as React from "react";
describe("Testing UI: Unit testing", () => {
  test.skip("had and display a heading title", () => {
    // ARRANGE
    render(<Page />); //this need babel to run convert jsx suntax to javascript

    // ACT
    const heading = screen.getByRole("heading", {
      name: "contact",
    });

    // ASSERT
    expect(heading).toBeDefined();
  });
});