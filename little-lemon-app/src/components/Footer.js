import {Link as RouterLink} from 'react-router-dom';
import {HashLink as RouterHashLink } from 'react-router-hash-link';

function Footer(props) {

    const closeMenu=()=>{
        if(props.isMenuOpen){
            props.toggleMenu(); //close the vertical menu
        }
    }
    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scroll to the top of the page
        closeMenu();
    };

    return(
        <footer>
            <section>
                <img src={process.env.PUBLIC_URL + '/images/footer_img.png'} alt="" ></img>
            </section>
            <section>
                <h6>Doormat Navigation</h6>
                <ul>
                    <li><RouterLink to="/" onClick={scrollToTop}>Home</RouterLink></li>
                    <li><RouterHashLink to="/#About-Section" onClick={closeMenu} smooth duration={1000}>About</RouterHashLink></li>
                    <li><RouterLink to="/notfound" onClick={scrollToTop}>Menu</RouterLink></li>
                    <li><RouterLink to="/booking" onClick={scrollToTop}>Reservations</RouterLink></li>
                    <li><RouterLink to="/notfound" onClick={scrollToTop}>Order Online</RouterLink></li>
                    <li><RouterLink to="/notfound" onClick={scrollToTop}>Login</RouterLink></li>
                </ul>
            </section>
            <section>
                <h6>Contact</h6>
                <ul className="contact-list">
                    <li className='location'>1199 Church St, <br/> San Francisco, <br/>CA 94114</li>
                    <li className='phone'>415-896-4973</li>
                    <li className='mail'>info@littlelemon.com</li>
                </ul>
            </section>
            <section>
                <h6>Social Media Links</h6>
                <div className="socials-list">
                    <a href="https://www.instagram.com/"><img className="socials-list insta" src={process.env.PUBLIC_URL+'/images/instagram.svg'}/></a>
                    <a href="https://www.facebook.com/"><img className="socials-list fb" src={process.env.PUBLIC_URL+'/images/facebook.svg'}/></a>
                    <a href="https://twitter.com/?lang=en"><img className="socials-list twitter" src={process.env.PUBLIC_URL+'/images/twitter.svg'}/></a>
                </div>
            </section>
        </footer>
    )
}

export default Footer