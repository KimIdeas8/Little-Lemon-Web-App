import React,{useState} from "react";

import BookingForm from "./BookingForm"

function ListofGoals(props){
    return(
      <ul>
        {props.allGoals.map((g)=>(
          <li key={g.chosenDate}>
            <span>Booking: {g.chosenDate},{g.chosenTime}, {g.numberOfGuests}, {g.occasion}</span>
          </li>
        ))}
      </ul>
    )
  }

function BookingPage(){
    const [allGoals, updateAllGoals] = useState([]);

    function addGoal(goal){
      updateAllGoals([...allGoals,goal]);
    }

    return(
    <booking-page>
        <BookingForm onAdd={addGoal}></BookingForm>
        <ListofGoals allGoals={allGoals}></ListofGoals>
    </booking-page>
    )
}

export default BookingPage