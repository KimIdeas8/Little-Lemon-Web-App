import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Button from 'react-bootstrap/Button';

const CustomButton = () => {
    const customButtonStyle = {
      fontFamily: 'Karla, sans-serif',
      fontWeight: 500,
      fontSize: '18pt',
      backgroundColor: '#fece14', // Replace with your desired background color
      color: 'black', // Replace with your desired text color
      border: 0,
      width: 'auto',
    };

    return (
      <Button variant="primary" style={customButtonStyle}><b>Reserve a Table</b></Button>
    );
  };

function Hero(){
    return(
        <hero>
        <div className="hero-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
            <CustomButton></CustomButton>
        </div>
        <div className='hero-img'>
            <img src={process.env.PUBLIC_URL + '/images/hero_img.jpg'} alt=""></img>
        </div>
        </hero>

    )
}

export default Hero;