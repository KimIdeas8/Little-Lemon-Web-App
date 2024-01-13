function About(){
    return(
        <about id='About-Section'>
            <about-text>
                <heading>Little Lemon</heading>
                <subheading>Chicago</subheading>
                <para>Little Lemon is a charming neighbourhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</para>
            </about-text>
            <about-pics>
                <div className='img1'>
                    <img id='img1' src={process.env.PUBLIC_URL+'/Images/restaurant chef B.jpg'} alt=""></img>
                </div>
                <div className='img2'>
                    <img id='img2' src={process.env.PUBLIC_URL+'Images/Mario and Adrian A.jpg'} alt=''></img>
                </div>
            </about-pics>
        </about>
    )
}

export default About