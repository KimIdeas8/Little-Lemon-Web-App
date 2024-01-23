import {Link as RouterLink} from 'react-router-dom';
import {HashLink as RouterHashLink } from 'react-router-hash-link';

const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
};

function NavHorizontal(props){

    return(
        <nav className='nav-list-horizontal'>
            {props.isMenuOpen?
            (<img src={process.env.PUBLIC_URL+'/images/x.svg'} onClick={props.toggleMenu} alt=""/>):
            (<img src={process.env.PUBLIC_URL+'/images/hamburger menu.svg'} onClick={props.toggleMenu} alt=""/>)
            }

            <ul>
                <li><RouterLink className='nav-item' to="/" onClick={scrollToTop}>Home</RouterLink></li>
                <li><RouterHashLink className='nav-item' to="/#About-Section" smooth duration={1000}>About</RouterHashLink></li>
                <li><RouterLink className='nav-item' to="/notfound" onClick={scrollToTop}>Menu</RouterLink></li>
                <li><RouterLink className='nav-item' to="/booking" onClick={scrollToTop} data-testid="reservations-link">Reservations</RouterLink></li>
                <li><RouterLink className='nav-item' to="/notfound" onClick={scrollToTop}>Order Online</RouterLink></li>
                <li><RouterLink className='nav-item login-link' to="/notfound" onClick={scrollToTop}>Login</RouterLink></li>
            </ul>
        </nav>
    )
}

export default NavHorizontal;