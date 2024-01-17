import {React} from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import BookingForm from './components/BookingForm';
import {initializeTimes, updateTimes} from './components/Main';

import {fetchAPI} from './components/api';


test('renders the bookingform heading', () => {
  const dispatch=jest.fn();
  render(<BookingForm availableTimes={[]} dispatchFn={dispatch}/>);

  const headingElement = screen.getByText("Book A Table");

  expect(headingElement).toBeInTheDocument();
});

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

test('validate that initializeTimes function returns the correct expected value', async() => {
  const expectedResult = [
    "===Select an available timeslot===",
    "16:00","22:00","23:00"
  ]
  const result = initializeTimes();
  expect(result).toEqual(expectedResult);
});

test('validate that updateTimes function returns the expected value', async() => {
  const action = {
    type:'CHANGE_DATE',
    payload:'2024-01-18'
  }

  const availableTimes = [];
  const expectedResult = [
    '===Select an available timeslot===',
    "16:00","20:00","21:00","22:00","23:00"
  ]
  const result = updateTimes(availableTimes,action);

  expect(result).toEqual(expectedResult);
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
  const result = updateTimes(availableTimes,action);

  expect(result).toEqual(expectedResult);
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
  const result = updateTimes(availableTimes,action);

  expect(result).toEqual(expectedResult);
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