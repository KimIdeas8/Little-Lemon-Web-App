function ErrorPage(){
    return(
        <section className="errorPage">
            <h3>Work in Progress...</h3>
            <img src={process.env.PUBLIC_URL + 'images/wip.png'} alt="errorImg"></img>
            <h5>Please return to home page by clicking on 'Home' in the navigation.</h5>
        </section>
    )
};

export default ErrorPage;