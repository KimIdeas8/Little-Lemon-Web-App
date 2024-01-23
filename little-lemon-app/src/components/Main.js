import {useReducer} from "react";
import {Routes,Route, useNavigate} from 'react-router-dom';

import BookingPage from './BookingPage.js';
import ConfirmedBookingPage from "./ConfirmedBookingPage.js";
import HomePage from './HomePage.js'
import ErrorPage from "./ErrorPage.js";

import { fetchAPI, submitAPI } from "./api.js";

function fetchData(date){
    return fetchAPI(date);
}

//handles state change for 'availableTimes' state based on the date selected by the user
const CHANGE_DATE = 'CHANGE_DATE';

function updateTimes(availableTimes,action){
    switch(action.type){
        case CHANGE_DATE:
            const selected_date = new Date(action.payload);
            return fetchData(selected_date);
        default:
            return availableTimes;
    }
}

//creates initial state for the state variable 'availableTimes':
function initializeTimes() {
    const today = new Date(); // Date Object: today's date and time
    return fetchData(today); // return availableTimes array from API
}

function Main(){

    const navigate=useNavigate();

    //if BookingForm is submitted, navigate to the booking confirmed page:
    function submitForm(formData){
        if (submitAPI(formData)){
            window.scrollTo(0, 0); // Scroll to the top of the page
            navigate('/confirmedbooking');
        }
    }

    /*
    function updateTimes(newTime){
        //setAvailableTimes(prevTimes => [...prevTimes, newTime]);
    }
    */
    //state variable for available times:
    // const [availableTimes,setAvailableTimes] = useState(initializeTimes())
    //change the state variable 'availableTimes' to a reducer:
    const [availableTimes,dispatch] = useReducer(updateTimes,initializeTimes())

    return(
        <main>
            <Routes>
                <Route path='/' element={<HomePage/>} ></Route>
                <Route path='/booking' element={<BookingPage availableTimes={availableTimes} dispatchFn={dispatch} onSubmitForm={submitForm} onDateChange={fetchData}/>}></Route>
                <Route path='/confirmedbooking' element={<ConfirmedBookingPage/>}></Route>
                <Route path='/notfound' element={<ErrorPage/>}></Route>
            </Routes>
        </main>
    )
}

export default Main
export{updateTimes,initializeTimes};
