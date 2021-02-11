//because we will be rendering JSX
import React from "react";

//these are named import //*alt below
// render - renders to your component
// screen -
// fireEvent - allows actions
import { render, screen } from "@testing-library/react";
// import rtl from '@testing-library/react'; //*to use rtl.render() rtl.screen()

// import the component you want to be testing.
import ContactForm from "./ContactForm";
// - get access to the userEvent object which has methods like .click() and .type()
import userEvent from "@testing-library/user-event";

test("ContactForm.js is rendered", () => {
  //arrange - organize //*Render the ContactForm
  const component = render(<ContactForm />); //*render() returns and object....
  // component.debug(); //...that object has a debug() method that logs the DOM. //*this does not mean you can test its nested contents. You can destructure it out of render() ie. const {debut} = render(<App/>)
  // console.log(component)

  //act - query/do/verb //*type 1: find/get/query or 2: click/type
  const btn = screen.getByRole("button");

  //assert - hypothesis //*Did the component mount?
  expect(btn).toBeInTheDocument();
});

test("enter into form", async () => {
  render(<ContactForm />);

  const firstName = screen.getByPlaceholderText(/eDD/i);
  // const lastName = screen.getByPlaceholderText(/Burke/i);
  const lastName2 = screen.getByLabelText(/last name*/i);
  const email = screen.getByPlaceholderText(/bluebill1049@hotmail.com/i);
  const textbox = screen.getByRole("textbox");
  const btn = screen.getByRole("button");

  userEvent.type(firstName, "Brian");
  userEvent.type(lastName2, "Reisman");
  userEvent.type(email, "asdf@asdf.com");
  userEvent.type(textbox, "This is a message");
  userEvent.click(btn);

  const nameAdded = await screen.findByText(/Brian/i);
  expect(nameAdded).toBeInTheDocument();
});
