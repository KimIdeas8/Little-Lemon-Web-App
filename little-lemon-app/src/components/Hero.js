import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';
import {Link as RouterLink} from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo(0, 0); // Scroll to the top of the page
};

const CustomButton = () => {
    const customButtonStyle = {
      fontFamily: 'Karla, sans-serif',
      fontWeight: 500,
      fontSize: '18pt',
      backgroundColor: '#fece14', // Replace with your desired background color
      color: 'black', // Replace with your desired text color
      border: 0,
      width: 'auto',
      marginBottom:'25px',
    };

    return (
      <RouterLink className='nav-item' to="/booking" onClick={scrollToTop}>
        <Button variant="primary" style={customButtonStyle}><b>Reserve a Table</b></Button>
      </RouterLink>
    );
  };

function Hero(){
    return(
        <section className="hero">
          <div className='text'>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
              <CustomButton/>
          </div>
          <div className='img'>
              <img src={process.env.PUBLIC_URL + '/images/hero_img_2.jpg'} alt=""></img>
          </div>
        </section>

    )
}

export default Hero;