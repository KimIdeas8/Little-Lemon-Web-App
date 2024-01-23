

function Card(props){
    return(
    <article className={props.className}>
        <div className='card-profile'>
            <img src={process.env.PUBLIC_URL + '/images/person-circle.svg'} alt=""></img>
            <b>{props.name}</b>
        </div>
        <div className='rating'>
            <img src="/images/yellow-star-full.svg" alt=""></img>
            <img src="/images/yellow-star-full.svg" alt=""></img>
            <img src="/images/yellow-star-full.svg" alt=""></img>
            <img src="/images/yellow-star-full.svg" alt=""></img>
            <img src="/images/yellow-star-full.svg" alt=""></img>
        </div>
        <p className='card-text'>{props.review}</p>
    </article>
    )
}


/*
                <Card className="cards one" name="Jesicah Waturi" review="I had an enjoyable lunch with my grandma."></Card>
                <Card className="cards two" name="Alec Browne" review="Great variety of cakes and desserts, French drinks."></Card>
                <Card className="cards three" name="Jorge Delau" review="The dessert was mouth-watering."></Card>
                <Card className="cards four" name="JC Loaiza" review="This has become my favourite restaurant."></Card>
*/
function Testimonials(){
    return(
        <section className="testimonials">
            <div className="title">
                <h3>Testimonials</h3>
            </div>
            <div className="body">
                <Card className="cards one" name="Jesicah Waturi" review="I had an enjoyable lunch with my grandma."></Card>
                <Card className="cards two" name="Alec Browne" review="Great variety of cakes and desserts, French drinks."></Card>
                <Card className="cards three" name="Jorge Delau" review="The dessert was mouth-watering."></Card>
                <Card className="cards four" name="JC Loaiza" review="This has become my favourite restaurant."></Card>
            </div>
        </section>
    )
}

export default Testimonials