import {Link} from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo(0, 0); // Scroll to the top of the page
};
function Header(){
    return(
        <header>
            <Link className='nav-item' to="/" onClick={scrollToTop}><img src={process.env.PUBLIC_URL + '/images/Logo.svg'} alt="logo"/></Link>
        </header>
    )
}

export default Header