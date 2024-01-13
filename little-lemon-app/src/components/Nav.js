import {Link as RouterLink} from 'react-router-dom';
import {HashLink as RouterHashLink } from 'react-router-hash-link';

function Nav(){
    return(
        <nav>
            <ul>
                <RouterLink className='nav-item' to="/">Home</RouterLink>
                <RouterHashLink className='nav-item' to="/#About-Section" smooth duration={500}>About</RouterHashLink>
                <RouterLink className='nav-item' to="/">Menu</RouterLink>
                <RouterLink className='nav-item' to="/booking">Reservations</RouterLink>
                <RouterLink className='nav-item' to="/">Order Online</RouterLink>
                <RouterLink className='nav-item' to="/">Login</RouterLink>
            </ul>
        </nav>
    )
}

export default Nav