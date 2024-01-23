function About(){
    return(
        <section className="about" id='About-Section'>
            <div className="text">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </div>
            <div className="img">
                <div className='img2'>
                    <img src={process.env.PUBLIC_URL+'Images/Mario and Adrian b_2.jpg'} alt=''></img>
                </div>
                <div className='img1'>
                    <img src={process.env.PUBLIC_URL+'/Images/restaurant chef B.jpg'} alt=""></img>
                </div>
            </div>
        </section>
    )
}

export default About