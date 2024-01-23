import {Link as RouterLink} from 'react-router-dom';
import {HashLink as RouterHashLink } from 'react-router-hash-link';



function NavVertical(props){
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        props.toggleMenu();
    };
    return(
        <nav className='nav-list-vertical'>
            {props.isMenuOpen?
            (<ul>
                <li><RouterLink className='nav-item login-link' to="/notfound" onClick={scrollToTop}>Login</RouterLink></li>
                <li><RouterLink className='nav-item' to="/" onClick={scrollToTop}>Home</RouterLink></li>
                <li><RouterHashLink className='nav-item' to="/#About-Section" onClick={props.toggleMenu} smooth duration={1000}>About</RouterHashLink></li>
                <li><RouterLink className='nav-item' to="/notfound" onClick={scrollToTop}>Menu</RouterLink></li>
                <li><RouterLink className='nav-item' to="/booking" onClick={scrollToTop} data-testid="reservations-link">Reservations</RouterLink></li>
                <li><RouterLink className='nav-item' to="/notfound" onClick={scrollToTop}>Order Online</RouterLink></li>
            </ul>):(<></>)
            }
        </nav>
    )
}

export default NavVertical;