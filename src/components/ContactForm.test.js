//because we will be rendering JSX
import React from "react";

//this is named import //*alt below
import { render } from "@testing-library/react";
// import rtl from '@testing-library/react'; //*to use rtl.render()

// import the component you want to be testing.
import ContactForm from "./ContactForm";

test("ContactForm.js is rendered", () => {
  //arrange - organize //*Render the ContactForm
  const component = render(<ContactForm />); //*render() returns and object....
  component.debug(); //...that object has a debug() method that logs the DOM. //*this does not mean you can test its nested contents.
  //act - do/verb //*type 1: find/get/query or 2: click/type

  //assert - hypothesis //*Did the component mount?
});
