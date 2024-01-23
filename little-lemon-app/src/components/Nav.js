import NavHorizontal from "./NavHorizontal"
import NavVertical from "./NavVertical"

function Nav(props){


    return(
        <>
            <NavHorizontal isMenuOpen={props.isMenuOpen} toggleMenu={props.toggleMenu}></NavHorizontal>
            <NavVertical isMenuOpen={props.isMenuOpen} toggleMenu={props.toggleMenu}></NavVertical>
        </>
    )
}

export default Nav