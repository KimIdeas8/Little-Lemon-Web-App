function Header(){
    return(
        <header>
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt=""/>
        </header>
    )
}

export default Header