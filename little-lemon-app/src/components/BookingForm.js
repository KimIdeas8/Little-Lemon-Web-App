import React,{useState} from 'react';

const CHANGE_DATE = 'CHANGE_DATE';

const DateErrorMessage = () => {
    return (
        <p className='bookingFieldError'>Please select a valid date.</p>
    )
}
const GuestsErrorMessage = () => {
    return(
        <p className='bookingFieldError'>Enter a value between 1 and 10.</p>
    )
}
const TimeErrorMessage = () => {
    return(
        <p className='bookingFieldError'>Please select an available date and timeslot.</p>
    )
}

function BookingForm(props){

    //state variables for form fields:
    const [formData, setFormData] = useState({chosenDate:"", chosenTime:props.availableTimes[0], numberOfGuests:1, occasion: "No Occasion"});
    const [isDateFieldTouched, setIsDateFieldTouched] = useState(false);
    const [isTimeFieldTouched, setIsTimeFieldTouched] = useState(false);

    function changeHandler(e){
        setFormData({...formData, [e.target.name]:e.target.value});
        //if date is changed, dispatch change in availableTimings
        if(e.target.name==='chosenDate'){
            props.dispatchFn({type:CHANGE_DATE, payload: e.target.value}) //return new array here with 'new Date'
            //when date is changed, fetch array of availableTimes back from Main.js,
            //then update chosenTime
            setFormData(prevFormData=>({...prevFormData,chosenTime:props.availableTimes[0]}));
        }
    }

    function submitHandler(e){
        e.preventDefault();
        //props.onAdd(formData); //="addGoal(formData)"
        props.onSubmitForm(formData);//="submitForm(formData)"
        setFormData({chosenDate:'', chosenTime:'===Select an available timeslot===', numberOfGuests:1, occasion:"No Occasion"});//clears the form
    }

    function isDateValid(){
        const today=new Date();
        const chosenDate = new Date(formData.chosenDate);
        today.setHours(0,0,0,0);
        chosenDate.setHours(0,0,0,0);
        return (
            chosenDate>=today
        )
    }

    const getIsFormValid = () => {

        return(
            isDateValid() &&
            formData.chosenTime !== "===Select an available timeslot===" &&
            formData.numberOfGuests >=1 && formData.numberOfGuests <= 10
        )
    }

    function todayDate () {
        const today=new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function handleDateBlur(){
        setIsDateFieldTouched(true);
    }

    function handleTimeBlur(){
        setIsTimeFieldTouched(true);
    }

    return(
        <>
            <form className="bookingForm" onSubmit={submitHandler}>
                <label className="bookingForm-labels" htmlFor="res-date">Choose date</label>
                <input className="bookingForm-input" type="date" id="res-date" name='chosenDate' required value={formData.chosenDate} min={todayDate()} onChange={changeHandler} onBlur={handleDateBlur}/>
                {isDateFieldTouched && !isDateValid()? (
                    <DateErrorMessage/>
                ):null}

                <label className="bookingForm-labels"  htmlFor="res-time">Choose time</label>
                <select className="bookingForm-input" id="res-time" name='chosenTime' required value={formData.chosenTime} onChange={changeHandler} onBlur={handleTimeBlur}>
                    {props.availableTimes.map((time)=>(
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
                {isTimeFieldTouched && formData.chosenTime === "===Select an available timeslot==="?(
                    <TimeErrorMessage/>
                ):null}

                <label className="bookingForm-labels" htmlFor="guests">Number of guests</label>
                <input className="bookingForm-input" type="number" min="1" max='10' id='guests' name='numberOfGuests' required value={formData.numberOfGuests} onChange={changeHandler}/>
                {formData.numberOfGuests>10|formData.numberOfGuests<1? (
                    <GuestsErrorMessage/>
                ):null}

                <label className="bookingForm-labels"  htmlFor="occasion">Ocassion</label>
                <select className="bookingForm-input" id="occasion" name='occasion' required value={formData.occasion} onChange={changeHandler}>
                    <option value="No Occasion">No Occasion</option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                </select>

                <input className="bookingForm-button" type="submit" disabled={!getIsFormValid()} value="Confirm"/>

            </form>
        </>
    )
}

export default BookingForm