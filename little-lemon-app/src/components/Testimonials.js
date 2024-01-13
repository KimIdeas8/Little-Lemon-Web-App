
function Card(props){
    return(
    <card className='card'>
        <div className='rating'>
            <text>Rating:</text>
            <img src="/images/star-full.svg" alt=""></img>
            <img src="/images/star-full.svg" alt=""></img>
            <img src="/images/star-full.svg" alt=""></img>
            <img src="/images/star-full.svg" alt=""></img>
            <img src="/images/star-full.svg" alt=""></img>
        </div>
        <div className='card-profile'>
            <img src={process.env.PUBLIC_URL + '/images/person-circle.svg'} alt=""></img>
            <text>{props.name}</text>
        </div>
        <div className='card-text'>
            <p>{props.review}</p>
        </div>
    </card>
    )
}

function Testimonials(){
    return(
        <testimonials>
            <heading>Testimonials</heading>
            <body>
                <div className="cards">
                <Card name="Jesicah Waturi" review="I had an enjoyable lunch with my grandma."></Card>
                <Card name="Alec Browne" review="Great variety of cakes and desserts, French drinks."></Card>
                <Card name="Jorge Delau" review="The dessert was mouth-watering."></Card>
                <Card name="JC Loaiza" review="This has become my favourite restaurant."></Card>
                </div>
            </body>
        </testimonials>
    )
}

export default Testimonials