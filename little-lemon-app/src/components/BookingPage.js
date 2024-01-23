import BookingForm from "./BookingForm"

function BookingPage(props){
    return (
    <section className="bookingPage">
        <h1>Book A Table</h1>
        <BookingForm availableTimes={props.availableTimes} dispatchFn={props.dispatchFn} onSubmitForm={props.onSubmitForm}/>
    </section>
    )
}

export default BookingPage