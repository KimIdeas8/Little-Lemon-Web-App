function Footer() {
    return(
        <footer>
            <div>
                <img src={process.env.PUBLIC_URL + '/images/footer_img.png'} alt=""></img>
            </div>
            <div className="footer-text" id="doormat-nav">
                <h6>Doormat<br></br>Navigation</h6>
                <ul>
                    <li><a href="#" className="nav-item">Home</a></li>
                    <li><a href="#" className="nav-item">About</a></li>
                    <li><a href="#" className="nav-item">Menu</a></li>
                    <li><a href="#" className="nav-item">Reservations</a></li>
                    <li><a href="#" className="nav-item">Order Online</a></li>
                    <li><a href="#" className="nav-item">Login</a></li>
                </ul>
            </div>
            <div className="footer-text">
                <h6>Contact</h6>
                <ul>
                    <li>Address</li>
                    <li>Phone No.</li>
                    <li>email</li>
                </ul>
            </div>
            <div className="footer-text">
                <h6>Social Media Links</h6>
                <ul>
                    <li><a href="https://www.instagram.com/">Instagram</a></li>
                    <li><a href="https://www.facebook.com/">FaceBook</a></li>
                    <li><a href="https://twitter.com/?lang=en">Twitter</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer