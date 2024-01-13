import React,{useState} from 'react';

function BookingForm(props){

    //state variable for available times:
    const [availableTimes] = useState([
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
    ])

    //state variables for form fields:
    const [formData, setFormData] = useState({chosenDate:"", chosenTime:availableTimes[0], numberOfGuests:1, occasion: "Birthday"});

    function changeHandler(e){
        setFormData({...formData, [e.target.name]:e.target.value});
    }

    function submitHandler(e){
        e.preventDefault();
        props.onAdd(formData); //="addGoal(formData)"
        setFormData({chosenDate:'', chosenTime:'', numberOfGuests:1, occasion:'Birthday'});
    }

    return(
        <bookingform>
            <form onSubmit={submitHandler}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" name='chosenDate' value={formData.chosenDate} onChange={changeHandler}/>

                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" name='chosenTime' value={formData.chosenTime} onChange={changeHandler}>
                    {availableTimes.map((time)=>(
                        <option key={time}>{time}</option>
                    ))}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max='10' id='guests' name='numberOfGuests' value={formData.numberOfGuests} onChange={changeHandler}/>

                <label htmlFor="occasion">Ocassion</label>
                <select id="occasion" name='occasion' value={formData.occasion} onChange={changeHandler}>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>

                <input type="submit" value="Make your reservation"/>

            </form>
        </bookingform>
    )
}

export default BookingForm