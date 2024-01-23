import {React} from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';
const {initializeTimes,updateTimes} =require('./components/Main');


test('renders the bookingform heading', () => {
  const dispatch=jest.fn();
  const submitForm=jest.fn();
  const fetchData=jest.fn();
  render(<BookingPage availableTimes={[]} dispatchFn={dispatch} onSubmitForm={submitForm} onDateChange={fetchData}/>);

  const headingElement = screen.getByText("Book A Table");

  expect(headingElement).toBeInTheDocument();
});

describe('end-to-end testing for BookingForm',()=> {
  test('validate that options are reflected correctly when availableTimes is returned from the initializeTimes function', () => {
    const expectedResult = [
      '===Select an available timeslot===',
      '16:00',
      '17:00'
    ];
    // expectedResult.forEach((time)=>{
    //   const returnedTimeElement = screen.getByText(time);
    //   expect(returnedTimeElement).toBeInTheDocument();
    // });
  
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={expectedResult} dispatchFn={dispatch}/>);
  
    const initialisedTimeElements = screen.getByLabelText(/Choose time/);
  
    expect(initialisedTimeElements).toHaveValue(expectedResult[0]);
  
    fireEvent.change(initialisedTimeElements, {target:{value: expectedResult[1]}});
    expect(initialisedTimeElements).toHaveValue(expectedResult[1]);
  
    fireEvent.change(initialisedTimeElements, {target:{value: expectedResult[2]}});
    expect(initialisedTimeElements).toHaveValue(expectedResult[2]);
  });

  test('validate that options are reflected correctly when availableTimes is returned from the updateTimes function', () => {
    const expectedResult = [
      '===Select an available timeslot===',
      '16:00',
      '17:00',
      '18:00'
    ];
  
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={expectedResult} dispatchFn={dispatch}/>);
  
    //change date:
    const dateSelectElement = screen.getByLabelText(/Choose date/)
    fireEvent.change(dateSelectElement, {target:{value: '2024-01-16'}})
  
    const initialisedTimeElements = screen.getByLabelText(/Choose time/);
  
    expect(initialisedTimeElements).toHaveValue(expectedResult[0]);
  
    fireEvent.change(initialisedTimeElements, {target:{value: expectedResult[1]}});
    expect(initialisedTimeElements).toHaveValue(expectedResult[1]);
  
    fireEvent.change(initialisedTimeElements, {target:{value: expectedResult[2]}});
    expect(initialisedTimeElements).toHaveValue(expectedResult[2]);
  
    fireEvent.change(initialisedTimeElements, {target:{value: expectedResult[3]}});
    expect(initialisedTimeElements).toHaveValue(expectedResult[3]);
  });
});

describe('initialiseTimes and updateTimes function unit-tests',()=>{
  test('validate that initializeTimes function returns the correct expected value', async() => {
    const expectedResult = [
      "===Select an available timeslot===",
      "16:00","22:00","23:00"
    ]
    //const result = initializeTimes();
    expect(initializeTimes()).toEqual(expectedResult);
  });

  test('validate that updateTimes function returns the expected value', async() => {
    const action = {
      type:'CHANGE_DATE',
      payload:'2024-01-24' /*change this to tmr's date*/
    }
  
    const availableTimes = [];
    const expectedResult = [
      '===Select an available timeslot===',
      "16:00","20:00","21:00","22:00","23:00"
    ]
    //const result = updateTimes(availableTimes,action);
  
    expect(updateTimes(availableTimes,action)).toEqual(expectedResult);
  });

  test('validate that updateTimes function returns the expected value for valid date, diff month', async() => {
    const action = {
      type:'CHANGE_DATE',
      payload:'2025-02-17'
    }
  
    const availableTimes = [];
    const expectedResult = [
      '===Select an available timeslot===',
      '11:00','12:00','13:00','14:00','15:00','16:00', '17:00', "18:00", '19:00', '20:00', '21:00', '22:00', '23:00'
    ]
    //const result = updateTimes(availableTimes,action);
  
    expect(updateTimes(availableTimes,action)).toEqual(expectedResult);
  });

  test('validate that updateTimes function returns the expected value for invalid date', async() => {
    const action = {
      type:'CHANGE_DATE',
      payload:'2023-12-29'
    }

    const availableTimes = [];
    const expectedResult = [
      '===Select an available timeslot==='
    ]
    //const result = updateTimes(availableTimes,action);

    expect(updateTimes(availableTimes,action)).toEqual(expectedResult);
  });
});

test('booking form can be submitted',async()=>{
  const handleSubmit = jest.fn();
  const dispatch = jest.fn();

  const availableTimes = [
    '===Select an available timeslot===',
    '16:00',
    '17:00'
  ]

  render(<BookingForm availableTimes={availableTimes} dispatchFn={dispatch} onSubmitForm={handleSubmit}/>);

  const dateSelectElement = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateSelectElement,{target:{value:'2024-10-01'}});
  const timeSelectElement = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeSelectElement,{target:{value:'16:00'}});
  const guestsInputElement = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsInputElement,{target:{value:1}});

  const submitButton = screen.getByRole("button");
  await waitFor(() => {
    // Assert that the button is not disabled after state update
    expect(submitButton).not.toHaveAttribute("disabled");
  });

  // Trigger the submit
  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled;
});

describe('HTML5 validation is applied to BookingForm fields', () => { 

  test('user should not be able to select an invalid date',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);

    const dateInputElement = screen.getByLabelText(/Choose date/);
    const date = "2024-01-23" //change this to today's date
    expect(dateInputElement).toHaveAttribute("min",date);
  });

  test('user should not be able to reserve a table for less than one person',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);

    const guestsInputElement = screen.getByLabelText(/Number of guests/);

    expect(guestsInputElement).toHaveAttribute("min","1");
  });
  test('user should not be able to reserve a table for more than ten persons',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);

    const guestsInputElement = screen.getByLabelText(/Number of guests/);

    expect(guestsInputElement).toHaveAttribute("max","10");
  });
});

describe('JavaScript validation is applied to BookingForm fields', () => { 
  test('an error message should be displayed when user has chosen an invalid date and cannot submit form',()=>{
  const dispatch=jest.fn();
  render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);

  const dateInputElement = screen.getByLabelText(/Choose date/);
  fireEvent.change(dateInputElement,{target:{value:""}});
  fireEvent.blur(dateInputElement);

  const dateErrorMessage = screen.getByText("Please select a valid date.");
  expect(dateErrorMessage).toBeInTheDocument();
  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled')
  });
  test('an error message should be removed when user selects a date and cannot submit form',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);
    const dateInputElement = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInputElement,{target:{value:'2030-01-01'}});

    const dateErrorMessage = screen.queryByText(/Please select a valid date./);
    expect(dateErrorMessage).not.toBeInTheDocument();
    const submitButton = screen.getByRole('button');
    expect(submitButton).not.toHaveAttribute('disabled')
  });

  test('an error message should be displayed when user has chosen an invalid time and cannot submit form',()=>{
  const dispatch=jest.fn();
  render(<BookingForm availableTimes={["===Select an available timeslot==="]} dispatchFn={dispatch}/>);

  const timeSelectElement = screen.getByLabelText(/Choose time/);
  fireEvent.change(timeSelectElement,{target:{value:"===Select an available timeslot==="}});
  fireEvent.blur(timeSelectElement);

  const timeErrorMessage = screen.getByText('Please select an available date and timeslot.')
  expect(timeErrorMessage).toBeInTheDocument();

  const submitButton = screen.getByRole('button');
  expect(submitButton).toHaveAttribute('disabled')
});

  test('an error message should be removed when user selects a time and can submit form',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={["===Select an available timeslot===","11:00"]} dispatchFn={dispatch}/>);
    const dateSelectElement = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateSelectElement,{target:{value:"2030-01-11"}});
    const timeSelectElement = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeSelectElement,{target:{value:"11:00"}});

    const timeErrorMessage = screen.queryByText('Please select an available date and timeslot.')
    expect(timeErrorMessage).not.toBeInTheDocument();

    const submitButton = screen.getByRole('button');
    expect(submitButton).not.toHaveAttribute('disabled');
  });

  test('user should not be able to submit form when reserving a table for less than one person',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={["11:00"]} dispatchFn={dispatch}/>);
    const dateSelectElement = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateSelectElement,{target:{value:"2030-01-11"}});
    const timeSelectElement = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeSelectElement,{target:{value:"11:00"}});
    const guestsInputElement=screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInputElement,{target:{value:"0"}})

    const guestsErrorMessage = screen.getByText('Enter a value between 1 and 10.');
    expect(guestsErrorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole('button');
    expect(submitButton).toHaveAttribute("disabled");
  });
  test('user should not be able to submit form when reserving a table for more than ten persons',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);
    const dateSelectElement = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateSelectElement,{target:{value:"2030-01-11"}});
    const timeSelectElement = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeSelectElement,{target:{value:"11:00"}});
    const guestsInputElement=screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInputElement,{target:{value:"11"}})

    const guestsErrorMessage=screen.queryByText('Enter a value between 1 and 10.')
    expect(guestsErrorMessage).toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveAttribute("disabled");
  });
  test('user should be able to submit form when reserving a table for less than ten persons',()=>{
    const dispatch=jest.fn();
    render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);
    const dateSelectElement = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateSelectElement,{target:{value:"2030-01-11"}});
    const timeSelectElement = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeSelectElement,{target:{value:"11:00"}});
    const guestsInputElement=screen.getByLabelText(/Number of guests/);
    fireEvent.change(guestsInputElement,{target:{value:"9"}})

    const guestsErrorMessage=screen.queryByText('Enter a value between 1 and 10.')
    expect(guestsErrorMessage).not.toBeInTheDocument();
    const submitButton = screen.getByRole("button");
    expect(submitButton).not.toHaveAttribute("disabled");
  });

});







