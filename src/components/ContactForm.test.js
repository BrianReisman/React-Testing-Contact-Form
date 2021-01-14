import React from "react";
import ContactForm from "./ContactForm";
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

test('sanity check', ()=>{
  expect(1 === 1).toBeTruthy();
  expect(1 !== 1).toBeFalsy();
})

test("asdf", async () => {
  //Arrange
  render(<ContactForm />)
  
  const firstName = screen.getByLabelText(/first name/i)
  const lastName = screen.getByLabelText(/last name/i);
  const email = screen.getByLabelText(/email/i);
  const message = screen.getByLabelText(/message/i);
  const button = screen.getByRole('button');

  
  //Act
  userEvent.type(firstName, 'ash')
  userEvent.type(lastName, 'TestLast-Name')
  userEvent.type(email, 'test@asdf.com')
  userEvent.type(message, 'This is a test message from line 18 of contactform.test.js')
  userEvent.click(button)


  //Assert
  const addedObj = await screen.findByText(/ash/i)
  expect(addedObj).toBeInTheDocument();
});
